const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'EXP_ADD': return [...state, payload];

  case 'EXP_DELETE': return state.filter(item => item.id !== payload.id);

  case 'CATEGORY_DELETE': return state.filter(item => item.catId !== payload);

  default: return state;

  }
};
