//create web server
const express = require("express");
const app = express();
const port = 3000;

//middleware
app.use(express.json());

//array to store comments
const comments = [];

//get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

//add comment
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send("comment added");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});