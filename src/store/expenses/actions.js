import uuid from 'uuid/v4';

export const expenseCreate = (expense) => {
  // { ...expense, id: uuid(), createdOn: new Date()}
  const settings = {
    id: uuid(),
    createdOn: new Date(),
  };
  const newCat = Object.assign(expense, settings);
  return {
    type: 'EXPENSE_CREATE',
    payload: newCat,
  };
};

export const expenseUpdate = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const expenseDelete = expenseId => ({
  type: 'EXPENSE_DELETE',
  payload: expenseId,
});
