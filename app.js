var http = require('http');
var fs = require('fs'); // to get data from html file
  
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // req.url stores the path in the url
    var url = req.url;
    if (url === "/") {

        fs.readFile("index.html", function (err, pgres) {
            if (err)
                res.write("INDEX.HTML NOT FOUND");
            else {
                // The following 3 lines
                // are responsible for sending the html file
                // and ends the response process
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    }
    else if (url === "/tailPage") {
        fs.readFile("tail.html", function (err, pgres) {
            if (err)
                res.write("TAIL.HTML NOT FOUND");
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    }
     
}).listen(process.env.PORT || 3000, function () {
    console.log("SERVER STARTED PORT: 3000");
});
