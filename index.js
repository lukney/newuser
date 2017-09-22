var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//start mysql connection
var connection = mysql.createConnection({
  host     : 'newuser.cgcpmi6mcuyv.us-east-2.rds.amazonaws.com', //mysql database host name
  user     : 'newuser', //mysql database user name
  password : '123456789', //mysql database password
  database : 'newuser', //mysql database name
  port     : '3306'  
});

connection.connect(function(err) {
  if (err) throw err
  
})
var server = app.listen(3009,   function () {

  var host = 'ec2-18-221-168-52.us-east-2.compute.amazonaws.com'
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
app.post('/insert', function (req, res) {
	//get data
    var data = {
        name:req.body.name,
       
     };
   connection.query("INSERT INTO newuser set ? ",data, function(err, rows){

           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }

          res.sendStatus(200);

        });
});