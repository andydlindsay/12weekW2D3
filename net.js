const net = require('net');
const port = 8080;

const server = net.createServer();

server.on('connection', (connection) => {
  console.log('client connected');

  connection.setEncoding('utf8');

  connection.write('Hello from the server!\n');

  connection.on('data', (data) => {
    console.log('From client:', data);
  });
});

server.listen(port);
