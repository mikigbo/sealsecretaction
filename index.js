// index.js

const express = require('express');
const app = express();
const port = 3000; // Port on which the server will listen

// Example secret credentials (should be replaced with actual secure methods)
const secretCredentials = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};

// Define a route to get the secret credentials
app.get('/secret', (req, res) => {
  console.log('cred ==>', secretCredentials);
  res.json(secretCredentials);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
