const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Home route" });
});
app.get("/about", (req, res) => {
  res.json({ message: "About page" });
});
app.get("/contact", (req, res) => {
  res.json({ message: "Contact page" });
});
app.get("/time", (req, res) => {
  res.json({ time: new Date().toLocaleTimeString() });
});
app.post("/echo", (req, res) => {
  res.json({
    receivedData: req.body
  });
});
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
