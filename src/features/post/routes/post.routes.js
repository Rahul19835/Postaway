import express from "express";
import { postAdd, postUpdate, deletePost, detailPost, allPost } from "../controller/post.controller.js";
import jwtAuth  from "../../../middlewares/jwtAuth.js";
import upload from "../../../middlewares/fileUpload.js";

const router = express.Router();

router.route("/").get(allPost);
router.route("/add").post(jwtAuth, upload, postAdd);
router.route("/update/:id").put(jwtAuth, upload, postUpdate);
router.route("/delete/:id").delete(jwtAuth, deletePost);
router.route("/detail/:id").get(jwtAuth, detailPost);

export default router; 