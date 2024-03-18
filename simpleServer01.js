
// Import the http module from Node.js
const http = require('http');

// Define the hostname and port where the server will run
const hostname = '127.0.0.1';
const port = 8900;

// Create a new HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP status code of the response to 200 (OK)
  res.statusCode = 200;

  // Set the Content-Type of the response to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // End the response and send a message
  res.end('Hello, my name is David.');
});

// Make the server start listening for incoming requests
server.listen(port, hostname, () => {
  // Log a message to the console once the server starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});