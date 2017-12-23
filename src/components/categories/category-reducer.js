const initialState = [];


export default (state=initialState, action) => {

    let {type, payload} = action;
    switch(type){
        case 'ADD_CATEGORY':
            return [... state, payload];
        case 'DELETE_CATEGORY':
            return state.filter((category) => category.id!==payload.id);
        case 'UPDATE_CATEGORY':
            return state.map((category,i) => category.id===payload.id ? payload : category);
        default: return state;
    }

}