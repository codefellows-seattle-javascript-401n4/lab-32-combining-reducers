const initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type){

  case 'CAT_NAV_UPDATE': return state.map(item => item.id === payload.cat.id ? payload.cat : item);

  case 'CATEGORY_ADD': return [...state, payload];

  case 'CATEGORY_UPDATE': return state.map(item => item.id === payload.id ? (item.name = payload.name) && (item.budget = payload.budget) && (item.remaining = item.budget - item.expenses) && item : item);

  case 'CATEGORY_DELETE': return state.filter(item => item.id !== payload);

  case 'EXP_ADD': return state.map(item => item.id === payload.catId ? (item.expenses += payload.amount) && (item.remaining = item.budget - item.expenses) && item : item);

  case 'EXP_DELETE': return state.map(item => item.id === payload.catId ? (item.expenses = item.expenses - payload.amount) && (item.remaining = item.budget - item.expenses) && item : item);

  default: return state;

  }
};
