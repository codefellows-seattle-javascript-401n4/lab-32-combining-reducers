const emptyState = {};

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'EXPENSE_CREATE':
      return {...state, [payload.categoryID]:payload};
    case 'EXPENSE_UPDATE':
      return state;
    default:
      return state;
  }
}