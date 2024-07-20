import { addpost, updatePost, removePost, getPostDetail, getAllPost } from "../model/post.model.js";
import upload from "../../../middlewares/fileUpload.js";
import { CustomError } from "../../../middlewares/errorHandler.js";

export const postAdd = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return next(new CustomError(400, err.message));
    }
    const { title, desc } = req.body;
    const userId = req.user;
    const imagePath = req.file ? req.file.path : null;
    try {
      let post = addpost(title, desc, userId, imagePath);
      if (post) {
        res.status(201).send({ status: "success", post });
      } else {
        throw new CustomError(400, "Post not added! Try after sometime.");
      }
    } catch (error) {
      next(error);
    }
  });
};

export const postUpdate = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return next(new CustomError(400, err.message));
    }
    const { title, desc } = req.body;
    const id = req.params.id;
    const userId = req.user;
    const imagePath = req.file ? req.file.path : null;
    try {
      let updatepost = updatePost(id, title, desc, userId, imagePath);
      if (updatepost) {
        res.status(201).send({ status: "success", updatepost });
      } else {
        throw new CustomError(400, "Post not updated! Try after sometime.");
      }
    } catch (error) {
      next(error);
    }
  });
};

export const deletePost = (req, res, next) => {
  const id = req.params.id;
  const userId = req.user;
  try {
    const dpost = removePost(id, userId);
    if (dpost) {
      res.status(200).send({ status: "success", dpost });
    } else {
      throw new CustomError(400, "Post not deleted! Try after sometime.");
    }
  } catch (error) {
    next(error);
  }
};

export const detailPost = (req, res, next) => {
  const id = req.params.id;
  const userId = req.user;
  try {
    const postsd = getPostDetail(id, userId);
    if (postsd) {
      res.status(200).send({ status: "success", postsd });
    } else {
      throw new CustomError(400, "Post not found! Try after sometime.");
    }
  } catch (error) {
    next(error);
  }
};

export const allPost = (req, res, next) => {
  try {
    const post = getAllPost();
    if (post) {
      res.status(200).send({ status: "success", post });
    } else {
      throw new CustomError(400, "No Post available! Try after sometime.");
    }
  } catch (error) {
    next(error);
  }
};
