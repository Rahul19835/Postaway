import { CustomError } from "../../../middlewares/errorHandler.js";

export const post = [];
let id = 0;

class PostSchema {
  constructor(title, desc, user, imagePath) {
    this.id = ++id;
    this.title = title;
    this.desc = desc;
    this.user = user;
    this.imagePath = imagePath;
  }
}

export const addpost = (title, desc, user, imagePath) => {
  const newPost = new PostSchema(title, desc, user, imagePath);
  post.push(newPost);
  return newPost;
};

export const updatePost = (id, title, desc, userId, imagePath) => {
  const numericId = Number(id);
  const userPost = post.find(p => p.id === numericId && p.user === userId);
  if (!userPost) throw new CustomError(400, "Post not found or unauthorized access");
  userPost.title = title;
  userPost.desc = desc;
  if (imagePath) userPost.imagePath = imagePath;
  return userPost;
};

export const removePost = (id, userId) => {
  const postId = Number(id);
  const postIndex = post.findIndex(p => p.id === postId && p.user === userId);
  if (postIndex === -1) throw new CustomError(400, "Post not found or unauthorized access");
  const removedPost = post.splice(postIndex, 1)[0];
  return removedPost;
};

export const getPostDetail = (id, userId) => {
  const postId = Number(id);
  const postDetail = post.find(p => p.id === postId && p.user === userId);
  if (!postDetail) throw new CustomError(400, "Post not found or unauthorized access");
  return postDetail;
};

export const getAllPost = () => {
  return post;
};
