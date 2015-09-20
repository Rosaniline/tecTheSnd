var multer = require('multer');
var fs = require('fs');
var path = require('path');
var express = require('express');
var GoogleSpreadsheet = require("google-spreadsheet");
var router = express.Router();


// Configure the multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {

    var form = req.body;
    var timestamp = new Date();

    var gsheet = new GoogleSpreadsheet('1gcs4oF9bbF1W1DGJ9RfJjdKqbnsbv0Fnko7zsSYTKfc');
    var creds = require('./tecapply-e4ea57d63d5e.json');

    gsheet.useServiceAccountAuth(creds, function(err){

      gsheet.getInfo( function( err, sheet_info ){

        gsheet.addRow(sheet_info.worksheets[0].id, {
          "時間戳記": timestamp.toString(),
          "團隊名稱": form['team'],
          "聯絡人": form['contact'],
          "手機": form['phone'],
          "電子信箱": form['mail'],
          "概念名稱": form['idea'],
          "產業": form['industry']
        }, function(){
          console.log("updated.");
        });
      });
    });

    var filename = req.body['team'];// path.parse(file.originalname).name;
    var ext = path.extname(file.originalname);
    var parent_dir = path.dirname(module.parent.filename);
    f_path = path.join(parent_dir, 'uploads', filename + ext);

    var count = 0;

    while ( fs.existsSync(f_path) ) {
        f_path = path.join(parent_dir, 'uploads', filename + "_" + (++count) + ext);
    }

    filename = count == 0 ? filename : filename + '_' + count; 

    cb(null, filename + ext);
    
  }
})

var upload = multer({ storage: storage });

router.post('/', upload.single('attach_file'), function (req, res, next) {
	
  res.end('file uploaded.');

});

module.exports = router;

