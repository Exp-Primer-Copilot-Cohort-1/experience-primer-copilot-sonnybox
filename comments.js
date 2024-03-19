// Create a basic plain text web server
var http = require('http');
var fs = require('fs');

// Create a server
http.createServer(function(req, res) {
  // Read the file
  fs.readFile('comments.json', function(err, data) {
    // If there was an error reading the file, throw an error
    if (err) throw err;
    // Otherwise, send the contents of the file
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    res.end();
  });
}).listen(8124, function() {
  console.log('Server running at http://localhost:8124/');
});