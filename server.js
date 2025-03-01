const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

connectDB(); // Connect to MongoDB
app.use("/tasks", taskRoutes); // Use task routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
