import { CustomError } from "../../../middlewares/errorHandler.js";
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
    const existingItem = likeItems.find(item => item.userId === userId && item.postId === postId);
    if (existingItem) {
        throw new CustomError(400, 'Like already exists.');
    } else {
        const newLike = new likeModel(userId, postId);
        likeItems.push(newLike);
        return newLike;
    }
};

export const removelike = (userId, postId, id) => {
    const index = likeItems.findIndex(like => like.id === Number(id) && like.postId === postId && like.userId === userId);
    if (index !== -1) {
        likeItems.splice(index, 1);
        return true;
    } else {
        throw new CustomError(404, 'Like not found');
    }
};

export const getAlllike = (id, userId) => {
    const existingItems = likeItems.filter(item => item.postId === Number(id) && item.userId === userId);
    if (existingItems.length > 0) {
        return existingItems;
    } else {
        throw new CustomError(404, 'Likes not found');
    }
};
