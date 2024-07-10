import { addpost, updatePost } from "../model/post.model.js";

export const postAdd = (req, res, next) => {
    const {title,desc} = req.body;
    const userId = req.user;
    let post = addpost(title,desc,userId);
    if (post) {
        res.status(201).send({ status: "success", post });
    } else {
      res.status(400).json({ status: "failure", msg: "Post not added! Try after sometime." });
    }
};

export const postUpdate = (req, res, next) => {
  const {title,desc} = req.body;
  const id = req.params.id;
  const userId = req.user;
  let updatepost = updatePost(id,title,desc,userId);
  if (updatepost) {
      res.status(201).send({ status: "success", updatepost });
  } else {
    res.status(400).json({ status: "failure", msg: "Post not updated! Try after sometime." });
  }
};