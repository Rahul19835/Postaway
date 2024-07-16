export const likeItems = [];

let likeId = 0;
export class likeModel {
  constructor(userId, postId) {
    this.id = ++likeId;
    this.userId = userId;
    this.postId = postId;
  }
}

export const addTolike = (userId, postId) => {
  const newLike = new likeModel(userId, postId);
  likeItems.push(newLike);
  return newLike;
};

export const removelike = (id) => {
  const index = likeItems.findIndex(like => like.id === Number(id));
  if (index !== -1) {
    likeItems.splice(index, 1);
    return true;
  }
  return false;
};

export const getAlllike = () => {
  return likeItems;
};
