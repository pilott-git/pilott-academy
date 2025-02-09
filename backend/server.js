const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./authRoutes");

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Pilott Academy Backend is Running!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
