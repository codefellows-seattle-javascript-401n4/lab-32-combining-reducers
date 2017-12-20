const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'CAT_NAV_UPDATE': return state.map(item => item.id === payload.cat.id ? payload.cat : item);

  case 'CATEGORY_ADD': return [...state, payload];

  default: return state;

  }
};
