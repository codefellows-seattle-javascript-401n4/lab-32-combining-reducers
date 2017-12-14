import initialState from '../lib/initialState';
  
  const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CATEGORY_CREATE':

        return [
          ...state, action.category
        ]

        case 'CATEGORY_UPDATE':
        
        return state.map(category => {
           if (category.id === action.category.id) category.name = action.category.update;
           return category;
        });
        
        case 'CATEGORY_DESTROY':
        return state.filter((category) => {
          if (category.id !== action.id) return category;
        });

        case 'CATEGORY_TOGGLE':
        return state.map(category => {

          if (category.id === action.id) category.updating = !category.updating;
          console.log(category.updating);
          return category;
        });

        default:
            return state;
    }
  }

  export default categoryReducer;