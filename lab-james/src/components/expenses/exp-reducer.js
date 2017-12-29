const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'EXP_ADD': return [...state, payload];

  case 'EXP_DELETE': return state.filter(item => item.id !== payload.id);

  case 'EXP_UPDATE': return state.map(expense => expense.id === payload.id ? payload : expense);

  case 'CATEGORY_DELETE': return state.filter(item => item.catId !== payload);

  default: return state;

  }
};
