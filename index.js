import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);

export default app;
