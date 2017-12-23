import uuid from 'uuid/v4';

export const expenceCreate = (expence) => {

    expence.id = uuid();
    expence.createDate = new Date();
    return {
        type:"ADD_EXPENCE",
        payload: expence
    };
};

export const expenceDelete = (expence) => {
    return {
        type:"DELETE_EXPENCE",
        payload: expence
    }
}

export const expenceUpdate = (expence) => {
    return {
        type:"UPDATE_EXPENCE",
        payload: expence
    }
}