import { addTocomment, removecomment, getAllComment, commentItems} from "../model/comment.model.js";

export const addComment = (req, res, next) =>{
    try {
        const { comment } = req.body;
        const id = req.params.id;
        const userId = req.user;
        addTocomment(userId,id,comment);
        const userCommentItems = commentItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userCommentItems });
    } catch (error) {
        res.status(400).json({ message: 'Something wrong!' });
    }
}

export const deleteComment = (req, res, next) => {
    try {
        const id = req.params.id;
        const cid = req.params.cid;
        const userId = req.user;
        removecomment(userId,cid,id);
        const userCommentItems = commentItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userCommentItems });
    } catch (error) {
        res.status(400).json({ message: 'Something wrong!' });
    }
}

export const allComment = (req, res, next) => {
    const id = req.params.id;
    const comment = getAllComment(id);
    if (comment) {
        res.status(200).send({ status: "success", comment });
    } else {
      res.status(400).json({ status: "failure", msg: "No comment not avaliable! Try after sometime." });
    }
  };