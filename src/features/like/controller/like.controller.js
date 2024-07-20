import { addTolike, removelike, getAlllike, likeItems } from "../model/like.model.js";
import { CustomError } from "../../../middlewares/errorHandler.js";

export const addLikeController = (req, res, next) => {
    try {
        const id = req.params.id;
        const userId = req.user;
        addTolike(userId, id);
        const userLikeItems = likeItems.filter(item => item.postId === id);
        res.status(200).json({ success: true, item: userLikeItems });
    } catch (error) {
        next(new CustomError(400, 'Something went wrong!'));
    }
};

export const removeLikeController = (req, res, next) => {
    try {
        const id = req.params.id;
        const pid = req.params.cid;
        const userId = req.user;
        removelike(userId, pid, id);
        const userLikeItems = likeItems.filter(item => item.postId === id);
        res.status(200).json({ success: true, item: userLikeItems });
    } catch (error) {
        next(new CustomError(400, 'Something went wrong!'));
    }
};

export const getAllLikesController = (req, res, next) => {
    try {
        const id = req.params.id;
        const userId = req.user;
        const likes = getAlllike(id, userId);
        if (likes) {
            res.status(200).send({ status: "success", likes });
        } else {
            throw new CustomError(404, 'No likes available! Try again later.');
        }
    } catch (error) {
        next(new CustomError(400, 'Something went wrong!'));
    }
};