export const commentItems = [];

let commentId = 0;
export class commentModel {
  constructor(userId, postId, comment) {
    this.id = ++commentId;
    this.userId = userId;
    this.postId = postId;
    this.comment = comment;
  }
}

export const addTocomment = (userId, postId, comment) => {
  const existingItem = commentItems.find(item => item.userId === userId && item.postId === postId);
  if (existingItem) {
    existingItem.comment = comment;
  } else {
    commentItems.push(new commentModel(userId, postId, comment));
  }
};

export const removecomment = (userId, commentItemId, postId) => {
  const itemIndex = commentItems.findIndex(item => item.userId === userId && item.id === Number(commentItemId) && item.postId === postId);
  if (itemIndex !== -1) {
    return commentItems.splice(itemIndex, 1);
  } else {
    throw new Error('comment not found');
  }
};

export const getAllComment = (postId) => {
    const allComment = commentItems.find(c => c.postId === Number(postId));
    if (allComment){
        return allComment;
    }else{
        throw new Error('comment not found');
    };
}
