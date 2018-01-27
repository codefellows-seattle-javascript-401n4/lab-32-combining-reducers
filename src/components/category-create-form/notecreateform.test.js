import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import CategoryCreateForm from './';
import CategoryForm from '../form';

configure({ adapter: new Adapter() });

describe('<CategoryCreateForm />', () => {
  let addCategory;
  beforeEach(() => {
    addCategory = sinon.spy();
  });
  describe('onSubmit', () => {
    test('calls add category when the form is submitted', () => {
      const wrapper = shallow(<CategoryCreateForm addCategory={addCategory} />);
      wrapper.find(CategoryForm).simulate('submit', { preventDefault: () => {} });
      expect(addCategory.calledOnce).toEqual(true);
    });
  });

  describe('onChange', () => {
    test('updates the state when input is updated', () => {
      const targetId = 'id';
      const targetValue = 'content';
      const wrapper = mount(<CategoryCreateForm addCategory={addCategory} />);
      wrapper.find('#content').simulate('change', {
        target: {
          id: targetId,
          value: targetValue,
        },
      });
      expect(wrapper.state()).toEqual({ [targetId]: targetValue });
    });
  });
});
