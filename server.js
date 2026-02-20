require("dotenv").config();

const express = require("express");
const cors = require("cors");
 
const userRoutes = require("./routes/userRoutes");
const subscriberRoutes = require("./routes/subscriber");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
 
app.use("/", subscriberRoutes);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


 

 
 

 