import { addTolike, removelike, getAlllike, likeItems } from "../model/like.model.js";

export const addLikeController = (req, res, next) =>{
    try {
        const id = req.params.id;
        const userId = req.user;
        addTolike(userId,id);
        const userLikeItems = likeItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userLikeItems });
    } catch (error) {
        res.status(400).json({ message: 'Something wrong!' });
    }
}

export const removeLikeController = (req, res, next) => {
    try {
        const id = req.params.id;
        const pid = req.params.cid;
        const userId = req.user;
        removelike(userId,pid,id);
        const userLikeItems = likeItems.filter(item => item.id === id);
        res.status(200).json({ success: true, item: userLikeItems });
    } catch (error) {
        res.status(400).json({ message: 'Something wrong!' });
    }
}

export const getAllLikesController = (req, res, next) => {
    const id = req.params.id;
    const userId = req.user;
    const likes = getAlllike(id,userId);
    if (likes) {
        res.status(200).send({ status: "success", likes });
    } else {
      res.status(400).json({ status: "failure", msg: "No comment not avaliable! Try after sometime." });
    }
};