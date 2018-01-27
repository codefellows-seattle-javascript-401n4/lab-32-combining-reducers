import categoryReducer from '../categories/reducer';

describe('category reducer', () => {
  let initialState;
  let payload;
  beforeEach(() => {
    initialState = {};
    payload = {
      id: 'new id',
      content: 'this is the content',
    };
  });
  test('it adds a new category if called with CATEGORY_ADD', () => {
    const newState = categoryReducer(initialState, { type: 'CATEGORY_ADD', payload });
    expect(newState).toEqual([{ content: 'this is the content', id: 'new id' }]);
  });

  test('it updates a category if called with CATEGORY_UPDATE', () => {
    const newState = categoryReducer(initialState, { type: 'CATEGORY_ADD', payload });
    const updatedState = categoryReducer(newState, { type: 'CATEGORY_UPDATE', payload: { id: 'new id', content: 'updated content' } });
    expect(updatedState).toEqual([{ content: 'updated content', id: 'new id' }]);
  });

  test('it deletes a category if called with CATEGORY_DELETE', () => {
    const newState = categoryReducer(initialState, { type: 'CATEGORY_ADD', payload });
    const deletedState = categoryReducer(newState, { type: 'CATEGORY_DELETE', payload: { id: 'new id' } });
    expect(deletedState).toEqual([]);
  });
});
