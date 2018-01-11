import { map, reject } from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'EXPENSE_ADD':
      return [...state, payload];

    case 'EXPENSE_UPDATE':
      return map(state, item => (item.id === payload.id ? payload : item));

    case 'EXPENSE_DELETE':
      return reject(state, { id: payload.id });

    default:
      return state;
  }
};
