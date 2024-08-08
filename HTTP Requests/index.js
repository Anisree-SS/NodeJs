import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h4>phone No:</h4> <h3>0056571400</h3>");
});
app.get("/about", (req, res) => {
  res.send("<h4> Iam Anisree</h4>");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
