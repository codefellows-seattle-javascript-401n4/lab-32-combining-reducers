import React from 'react';
import {shallow, mount} from 'enzyme';

import {Provider} from 'react-redux';
import createStore from '../app/store';

import CatForm from '../components/categories/cat-form.js';

describe('Categories', () => {

  let store;
  let wrapper;

  beforeEach( () => {
    store = createStore()
    wrapper = mount(<Provider store={store}><CatForm /></Provider>)
  });

  test('', () => {
    let title1 = "New Cat";
    let title2 = "New Cat 2";
    let newCatField = wrapper.find('form #name');

    newCatField.simulate('change', {value: title1});
    CatForm.simulate('submit');

    expect(wrapper.find('.categories').length).toEqual(1);
  });
});
