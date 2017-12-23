import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';

import CategoryForm from '../components/categories/Category-form';
import ExpenseForm from '../components/expenses/Expense-form';

describe('<CategoryForm/>', () => {
  test('add a new category', () => {
    const wrapper = shallow(<CategoryForm />);

    let name = "groceries";
    let budget = "100";
    
    let noteCreate = (state) => {
        expect(Category.state().name).toEqual(name);
        expect(Category.state().budget).toEqual(budget);
    }
    
    let Category = shallow(<CategoryForm handler={noteCreate} />);
    
    Category.find("#categoryName").simulate( 'change', { target: {name:"name", value:name} } );
    Category.find("#budgetAmt").simulate( 'change', { target: {name:"budget", value:budget} } );
    Category.find("#categorySubmitButton").simulate( 'submit', { preventDefault:()=>{} } );
  });
});
