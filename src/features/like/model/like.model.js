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

export const removelike = (userId,postId,id) => {
  const index = likeItems.findIndex(like => like.id === Number(id) && like.postId === postId && like.userId === userId);
  if (index !== -1) {
    likeItems.splice(index, 1);
    return true;
  }
  return false;
};

export const getAlllike = (id,userId) => {
  const existingItem = likeItems.find(item => item.postId === Number(id) && item.userId === userId);
  return existingItem;
};
