const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Middleware to verify JWT
function authenticateToken(req, res, next) {
  // Get token from the Authorization header
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Expecting "Bearer <token>"

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    // Attach the user info (from the decoded token) to the request object
    req.user = user; // User information stored in the token
    next(); // Pass control to the next middleware or route handler
  });
}

module.exports = authenticateToken;
