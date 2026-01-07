import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express () ;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});