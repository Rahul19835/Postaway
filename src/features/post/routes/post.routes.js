import express from "express";
import { postAdd } from "../controller/post.controller.js";
import jwtAuth  from "../../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/add").post(jwtAuth, postAdd);

export default router;