var mysql      = require('mysql');
var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

var connection = mysql.createConnection({
  host     : 'liangdb.c7fn0orhmfju.ap-northeast-2.rds.amazonaws.com',
  user     : 'root',
  password : '123456llw',
  database : 'text_db'
});
  
connection.connect();

const header1 = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "x-requested-with,content-type"
}
function start(response) {
  console.log("Request handler 'start' was called.");

  connection.query('SELECT * FROM user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(results));
  });
}

function sqltext (response) {
  // var params = {
  //   'a': 111,
  //   'b': 222
  // }
  // response.writeHead(200, {"Content-Type": "application/json"});
  // response.end(JSON.stringify(params));

  // connection.query('SELECT * FROM user', function (error, results, fields) {
  //   if (error) throw error;
  //   console.log('The solution is: ', results);
  //   response.writeHead(200, {"Content-Type": "application/json"});
  //   response.end(JSON.stringify(results));
  // });
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  // var form = new formidable.IncomingForm();
  // console.log("about to parse");
  // form.parse(request, function(error, fields, files) {
  //   console.log("parsing done");
  //   fs.renameSync(files.upload.path, "D:/Study/test.png");
  //   response.writeHead(200, {"Content-Type": "text/html"});
  //   response.write("received image:<br/>");
  //   response.write("<img src='/show' />");
  //   response.end();
  // });
}

function show(response) {
  console.log("Request handler 'show' was called.");
  // fs.readFile("D:/Study/test.png", "binary", function(error, file) {
  //   if(error) {
  //     response.writeHead(500, {"Content-Type": "text/plain"});
  //     response.write(error + "\n");
  //     response.end();
  //   } else {
  //     response.writeHead(200, {"Content-Type": "image/png"});
  //     response.write(file, "binary");
  //     response.end();
  //   }
  // });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.sqltext = sqltext;
