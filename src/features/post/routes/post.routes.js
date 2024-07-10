import express from "express";
import { postAdd, postUpdate } from "../controller/post.controller.js";
import jwtAuth  from "../../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/add").post(jwtAuth, postAdd);
router.route("/update/:id").put(jwtAuth, postUpdate);

export default router;