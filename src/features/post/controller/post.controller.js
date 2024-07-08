import { addpost } from "../model/post.model.js";

export const postAdd = (req, res, next) => {
    const {title,desc} = req.query;
    const userId = req.userId;
    
    console.log(userId);
      let post = addpost(title,desc,userId);
      
      if (post) {
        res.status(201).send({ status: "success", post });
    } else {
      res.status(400).json({ status: "failure", msg: "Post not added! Try after sometime." });
    }
};