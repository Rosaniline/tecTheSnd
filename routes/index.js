var express = require('express');
var JSON = require('JSON');
var router = express.Router();

var sheet = [];
var GoogleSpreadsheet = require("google-spreadsheet");
var gsheet = new GoogleSpreadsheet('1OcGNyhepFlANbGUJAInxTLrT_8bhzaI5nC9C2WcYMGQ');


setInterval(function() {

	updateSheet();
    
}, 5000);


function updateSheet() {

	var new_sheet = [];

    gsheet.getRows( 1, function(err, row_data){

    	if ( row_data != null ) {

	        for (var i = 0; i < row_data.length; i ++) {
	            var this_sheet = {
	                'date': row_data[i].date,
	                'title': row_data[i].title,
	                'content': row_data[i].content
	            }
	            
	            new_sheet.push(this_sheet);
	        };

	        if ( JSON.stringify(new_sheet) != JSON.stringify(sheet) ) {

	        	sheet = new_sheet;
	        	// console.log("sheet updated.");
		       	
	        }

    	}


    });

};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: '臺大種子創業競賽',
  	data: sheet });

});


module.exports = router;
