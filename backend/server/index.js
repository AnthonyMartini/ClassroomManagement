const express = require("express");
const bodyParser = require("body-parser");
const registerRoute = require("./routes/auth/register"); // Import register route
const loginRoute = require("./routes/auth/login"); // Import login route
const studentRoute = require("./routes/student"); // Import login route
const signInRoute = require("./routes/signIn");
const cors = require("cors");

const app = express();
const PORT = process.env.DB_PORT || 1433;

// Allow requests from localhost:3000
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

// Use body-parser to parse JSON data in the request body
app.use(bodyParser.json());

// Register routes
app.use("/api/auth/register", registerRoute); // Register route
app.use("/api/auth/login", loginRoute); // Login route
app.use("/api/student", studentRoute); // Login route
app.use("/api/signIn", signInRoute); // Login route

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
