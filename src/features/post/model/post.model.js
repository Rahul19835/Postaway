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

export const updatePost = (id,userId,data) => {
  const userPost = post.find((p) => p.id == parseInt(id) && p.userId == parseInt(userId));
  if (!userPost) return null;
  Object.assign(userPost, data);
  return userPost;
}
export const deletePost = () => {}