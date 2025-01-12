// Import the express library
const express = require('express');

// Create an express app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Define a custom API route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
