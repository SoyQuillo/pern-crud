import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/tasks.routes.js";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(userRoutes);

app.listen(3000);

console.log("Server on port 3000");
