import uuid from 'uuid/v4';

export const categoryCreate = (category) => {

  category.id = uuid();
  category.createDate = new Date();
  category.updating = false;

  return {
    type:"CATEGORY_ADD",
    payload: category
  };
};

export const categoryDelete = (_id) => {

  return {
    type:"CATEGORY_DELETE",
    payload: _id
  };

};

export const categoryToggle = (_id) => {

  return {
    type:"CATEGORY_TOGGLE",
    payload: _id
  };
};

export const categoryUpdate = (payload) => {

  return {
    type:"CATEGORY_UPDATE",
    payload
  };
};
