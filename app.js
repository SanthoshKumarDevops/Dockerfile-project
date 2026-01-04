const express = require("express");
const path = require("path");

const app = express();
const PORT = 3016;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Views
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin123") {
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
  } else {
    res.send("<h3>❌ Invalid credentials</h3><a href='/'>Try again</a>");
  }
});

// Payment page
app.get("/payment", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "payment.html"));
});

// Payment processing (mock)
app.post("/pay", (req, res) => {
  const { amount } = req.body;
  res.send(`
    <h2>✅ Payment Successful</h2>
    <p>Amount Paid: ₹${amount}</p>
    <a href="/payment">Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
