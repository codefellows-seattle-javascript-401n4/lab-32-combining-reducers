import uuid from 'uuid/v4';

export const categoryCreate = (category)=>{
    category.id = uuid();
    category.createDate = new Date();
    return {
        type:"ADD_CATEGORY",
        payload:category
    }
}
export const categoryDelete = (category) => {
    return {
        type: "DELETE_CATEGORY",
        payload: category
    }
}
export const categoryUpdate = (category) => {
    return {
        type: "UPDATE_CATEGORY",
        payload: category
    }
}