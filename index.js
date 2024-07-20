import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";
import postRoutes from "./src/features/post/routes/post.routes.js";
import commentRoutes from "./src/features/comment/routes/comment.routes.js"
import likeRoutes from "./src/features/like/routes/like.routes.js"
import { errorHandlerMiddleware  } from "./src/middlewares/errorHandler.js";

import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/like", likeRoutes);

app.use(errorHandlerMiddleware);

export default app;
