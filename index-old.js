// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Environment variables with fallback values
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.LOCAL_MONGO_URI || 'mongodb://admin:password@local_mongo:27017/localDb?authSource=admin';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js API with MongoDB!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



