//https://scrimba.com/p/pEKMsN/cast-1953

// var http = require('http');
// console.log('Some text...');
// http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('Hello World!');
// }).listen(3001);

var data = [30,86,168,281,303,365];

d3.select("chart")
.selectAll("div")
.data(data)
.enter()
.append("div")
.style("width", function(d){return d + "px";})
.text(function(d){return d;});
