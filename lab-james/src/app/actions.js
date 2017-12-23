import uuid from 'uuid/v4';

export const catNavUpdate = target => {
  return {
    type: 'CAT_NAV_UPDATE',
    payload: target,
  };
};

export const createCategory = category => {
  category.id = uuid();
  category.createDate = new Date();
  category.render = true;
  category.expenses = 0;
  category.expenses = 0;

  return {
    type: 'CATEGORY_ADD',
    payload: category,
  };
};

export const updateCat = category => {
  return {
    type: 'CATEGORY_UPDATE',
    payload: category,
  };
};

export const deleteCat = categoryId => {
  return {
    type: 'CATEGORY_DELETE',
    payload: categoryId,
  };
};
