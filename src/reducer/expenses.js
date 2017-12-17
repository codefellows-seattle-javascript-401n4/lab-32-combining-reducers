const emptyState = {};

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'EXPENSE_CREATE':
      console.log('Expense Created');
      return state;
    case 'EXPENSE_UPDATE':
      return state;
    default:
      return state;
  }
}