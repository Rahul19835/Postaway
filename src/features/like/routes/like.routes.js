import express from 'express';
import { addLikeController, removeLikeController, getAllLikesController } from '../controller/like.controller.js';
import jwtAuth  from "../../../middlewares/jwtAuth.js";

const router = express.Router();

router.route("/add/:id").post(jwtAuth, addLikeController);
router.route("/delete/:id/:pid").delete(jwtAuth, removeLikeController);
router.route("/:id").get(jwtAuth, getAllLikesController);

export default router;
