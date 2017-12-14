import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import expect from 'expect';

import categoryReducer from '../src/reducers/category-reducer';
import newCategory from '../src/lib/newCategory';


Enzyme.configure({ adapter: new Adapter() });

// NoteCreateform
//  onChange + onSubmit



test('Test that CATEGORY_CREATE returns state with a new Category inside', () => {
    let brandNewCategory = newCategory("Our Testing Category", 10);

    let action = {type: 'CATEGORY_CREATE', category: brandNewCategory};

    let state = categoryReducer(state,action);

    expect(state.length).toEqual(1);
});

test('Test that CATEGORY_UPDATE updates the category name within state if the id matches', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let brandNewCategory2 = newCategory("Our Testing Category 2", 100);
    let state = [{...brandNewCategory1},{...brandNewCategory2}];

    state = categoryReducer(state, {
        type: 'CATEGORY_UPDATE',
        category: {
            id : brandNewCategory1.id,
            update: 'This is an update name for brandNewCategory1'
        }
    });

    state.map(category => {
        return (category.budget === 10) ? expect(category.name).toEqual('This is an update name for brandNewCategory1') : expect(category.name).toEqual('Our Testing Category 2');
    });
});

test('Test that CATEGORY_DESTROY removes a category from the state array', () => {
    let brandNewCategory1 = newCategory("Our Testing Category 1", 10);
    let brandNewCategory2 = newCategory("Our Testing Category 2", 100);
    let state = [{...brandNewCategory1},{...brandNewCategory2}];

    expect(state.length).toEqual(2);

    state = categoryReducer(state, {
        type: 'CATEGORY_DESTROY', 
        id: brandNewCategory1.id
    });

    expect(state.length).toEqual(1);

    // first and only category in state should be OTC2 because we deleted OTC1
    expect(state[0].name).toEqual('Our Testing Category 2');
});