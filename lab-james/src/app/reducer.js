const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'CAT_NAV_UPDATE': return state.map(item => item.id === payload.cat.id ? payload.cat : item);

  case 'CATEGORY_ADD': return [...state, payload];

  case 'CATEGORY_UPDATE': return state.map(item => item.id === payload.id ? payload : item);

  case 'CATEGORY_DELETE': return state.filter(item => item.id !== payload);

  default: return state;

  }
};
