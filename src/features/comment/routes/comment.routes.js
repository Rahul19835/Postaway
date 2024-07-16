import express from "express";
import { addComment, deleteComment, allComment } from "../controller/comment.controller.js";
import jwtAuth  from "../../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/add/:id").post(jwtAuth, addComment);
router.route("/delete/:id/:cid").delete(jwtAuth, deleteComment);
router.route("/comment/:id").get(jwtAuth, allComment);

export default router; 