const connectDB = require('./config/db');
const express = require('express');
const path = require('path')

const app = express();

// Middleware
app.use(express.json({ extended: false }));

connectDB();

const PORT = process.env.PORT || 8000;

// serve static build for production
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Catch errors for Unauthorized JWT Signatures.
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({
      'error': err.name + ': ' + err.message,
    });
  } else if (err) {
    res.status(400).json({
      'error': err.name + ': ' + err.message,
    });
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
