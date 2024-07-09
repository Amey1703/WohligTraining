import express from "express";
import './scheduler3.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 1234;

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});