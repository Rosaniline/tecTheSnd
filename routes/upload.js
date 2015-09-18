var multer = require('multer');
var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();


// Configure the multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {

    var filename = path.parse(file.originalname).name;
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
	console.log(Object.keys(req.body));

});

module.exports = router;
