import { addTocomment, removecomment, getAllComment, commentItems} from "../model/comment.model.js";

export const addComment = (req, res, next) =>{
    try {
        const { comment } = req.body;
        const id = req.params.id;
        const userId = req.user;
        addTocomment(id, userId, comment);
        const userCommentItems = commentItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userCommentItems });
    } catch (error) {
        res.status(400).json({ message: 'Something wrong!' });
    }
}