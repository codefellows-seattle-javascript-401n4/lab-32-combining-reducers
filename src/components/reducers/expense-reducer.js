const initialState = [];

export default (state=initialState, action) => {
  console.log('Action', action);
  let {type, payload} = action;

  switch ( type ) {

    case "EXPENSE_ADD":
      return [...state, payload];
    case "EXPENSE_DELETE":
      return state.filter( (item,i) => item.id !== payload );
    case "EXPENSE_TOGGLE":
      return state.map( (item,i) => {
        if (item.id === payload) {
          state[i].updating = !state[i].updating;
        } return item;
      });
    case "EXPENSE_UPDATE":
      return state.map( (item, i) => {
        if (item.id === payload.id) {
          state[i].name = payload.name;
        } return item;
      });
    default:
      return state;
  }
}
