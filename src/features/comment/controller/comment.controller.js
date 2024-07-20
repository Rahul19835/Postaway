import { addTocomment, removecomment, getAllComment, commentItems } from "../model/comment.model.js";
import { CustomError } from "../../../middlewares/errorHandler.js";

export const addComment = (req, res, next) => {
    try {
        const { comment } = req.body;
        const id = req.params.id;
        const userId = req.user;
        addTocomment(userId, id, comment);
        const userCommentItems = commentItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userCommentItems });
    } catch (error) {
        next(new CustomError(400, 'Something went wrong!'));
    }
};

export const deleteComment = (req, res, next) => {
    try {
        const id = req.params.id;
        const cid = req.params.cid;
        const userId = req.user;
        removecomment(userId, cid, id);
        const userCommentItems = commentItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userCommentItems });
    } catch (error) {
        next(new CustomError(400, 'Something went wrong!'));
    }
};

export const allComment = (req, res, next) => {
    try {
        const id = req.params.id;
        const comment = getAllComment(id);
        res.status(200).send({ status: "success", comment });
    } catch (error) {
        next(new CustomError(400, 'No comment available! Try again later.'));
    }
};
