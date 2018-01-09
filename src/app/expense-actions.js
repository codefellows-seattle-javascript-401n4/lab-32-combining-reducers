import uuid from 'uuid/v4';

export const expenseCreate = (expense) => {

  expense.id = uuid();
  expense.createDate = new Date();
  expense.updating = false;

  return {
    type:"EXPENSE_ADD",
    payload: expense
  };
};

export const expenseDelete = (_id) => {

  return {
    type:"EXPENSE_DELETE",
    payload: _id
  };

};

export const expenseToggle = (_id) => {

  return {
    type:"EXPENSE_TOGGLE",
    payload: _id
  };
};

export const expenseUpdate = (payload) => {

  return {
    type:"EXPENSE_UPDATE",
    payload
  };
};
