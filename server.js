/*const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Sample data
const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
];

// Endpoint to provide data
app.get('/data', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://hayatriya.github.io/cors/');
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Define your website's origin
const allowedOrigin = 'file:///C:/Users/TEMP.LAPTOP-F9FPJNRE/Desktop/CORS/index.html/127.0.0.1 mywebsite.com';

// Enable CORS with specific origin
app.use(cors({
  origin: allowedOrigin
}));

// Sample data
const data = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' }
];

// Endpoint to provide data
app.get('/data', (req, res) => {
  res.header('Access-Control-Allow-Origin', allowedOrigin);
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
