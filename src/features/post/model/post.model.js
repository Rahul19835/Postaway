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
