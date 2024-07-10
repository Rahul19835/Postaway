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
  console.log(id,title,desc,userId);
  const userPost = post.find(p => p.id == id && p.user == userId);
  console.log(userPost);
  if (!userPost) return null;
  userPost.title = title;
  userPost.desc = desc;
  return userPost;
}
export const deletePost = () => {}