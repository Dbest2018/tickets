const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();

const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the support desk api" });
});

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
