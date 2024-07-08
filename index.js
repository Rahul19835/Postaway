import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";
import postRoutes from "./src/features/post/routes/post.routes.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

export default app;
