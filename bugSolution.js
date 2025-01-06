const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user by ID ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

app.get('/users', (req, res) => {
  // ... some database query to fetch all users ...
  if (!users) {
    return res.status(500).send('Error fetching users');
  }
  res.send(users); // Correct approach: Sends 200 with empty array if users is empty
});