export const post = [];
let id = 0;
class PostSchema {
  constructor(title, desc, user) {
    this.id = ++id;
    this.title = title;
    this.desc = desc;
    this.user = user;
  }
}

export const addpost = (title, desc, user) => {
    const newPost = new PostSchema(title, desc, user);
    post.push(newPost);
    return newPost;
};

export const updatePost = (id,title,desc,userId) => {
  const numericId = Number(id);
  const userPost = post.find(p => p.id === numericId && p.user === userId);
  if (!userPost) return null;
  userPost.title = title;
  userPost.desc = desc;
  return userPost;
}
export const removePost = (id,userId) => {
  const postId = Number(id);
  const postIndex = post.findIndex(p => p.id === postId && p.user === userId);
  if (postIndex === -1) return null
  const removedPost = post.splice(postIndex, 1)[0];
  return removedPost;
}