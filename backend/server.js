const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyparser = require('body-parser');
const connectDB = require('./db/db.js');
const Password = require('./models/password.js');

dotenv.config();

// Connect to DB
connectDB();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyparser.json());


// Get all passwords
app.get('/', async (req, res) => {
  try {
    const passwords = await Password.find({});
    res.json(passwords);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching passwords" });
  }
});

// Save a password
app.post('/', async (req, res) => {
  try {
    const newPassword = await Password.create(req.body);
    res.json({ success: true, result: newPassword });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving password", err });
  }
});

// Delete a password
app.delete('/:id', async (req, res) => {
  try {
    const deleted = await Password.findByIdAndDelete(req.params.id);
    res.json({ success: true, result: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting password" });
  }
});

//update a password 
app.put('/:id', async (req, res) => {
  try {
    const updated = await Password.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ success: true, result: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error updating password" });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
