import uuid from 'uuid/v4';

export const create = ({name,cost,categoryID}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    id: uuid(),
    created: Date.now(),
    categoryID,
    name,
    cost,
  },
});

export const update = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const destroy = (expense) => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
})


