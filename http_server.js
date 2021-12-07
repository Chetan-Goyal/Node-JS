const http = require('http');

http.createServer((request, response) => {
  console.log('request.url: ' + request.url)
  if (request.url === "/") {

    response.end('Hello World');
  } else if (request.url === "/about") {
    response.end('About page')
  }
  else {
    response.end('404')
  }
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')