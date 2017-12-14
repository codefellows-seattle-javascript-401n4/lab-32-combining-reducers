

const expenseReducer = (state = [], action) => {
    switch(action.type) {
        case 'EXPENSE_CREATE':
            return state;

        case 'EXPENSE_UPDATE':
            return state;
        
        case 'EXPENSE_DESTROY':
            return state;
        
        default:
            return state;
    }
}

export default expenseReducer;