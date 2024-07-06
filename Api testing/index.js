const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      {
        name: "John",
        age: 20,
      },
      {
        name: "Jane",
        age: 30,
      },
    ],
  });
});

app.post("/users", (req, res) => {
    const { name, age } = req.body;
    if (!name ||!age) {
      res.status(400).json({ error: "Please provide name and age" });
    } else {
      res.status(201).json({ name, age });
    }
  
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = { app };