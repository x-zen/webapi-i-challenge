const express = require('express') // import the express package

const server = express(); // creates the server

// handle request to the root of the api, the '/' route
server.get('/', (req, res) => {
  res.send('Howdy from x-zen');
});

// watch for connections on port 3000
server.listen(3000, () =>
  console.log('Server running on http://localhost:3000')
);
