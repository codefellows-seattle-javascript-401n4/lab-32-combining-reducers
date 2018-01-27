import uuid from 'uuid/v4';

export const categoryCreate = (category) => {
  // { ...category, id: uuid(), createdOn: new Date()}
  const settings = {
    id: uuid(),
    createdOn: new Date(),
  };
  const newCat = Object.assign(category, settings);
  return {
    type: 'CATEGORY_ADD',
    payload: newCat,
  };
};

export const categoryUpdate = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDelete = categoryId => ({
  type: 'CATEGORY_DELETE',
  payload: categoryId,
});
