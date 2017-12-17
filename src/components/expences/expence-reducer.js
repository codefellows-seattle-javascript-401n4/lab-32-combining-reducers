const initialState = {};

export default (state=initialState, action) => {
    let {type, payload={}} = action;
    let {id, categoryId} = payload;
    let categoryExpences = state[categoryId];

    switch(type){

        case "ADD_CATEGORY":
            return {...state, [payload.id]:[]};
        case "ADD_EXPENCE":
        return {...state, [categoryId]: [...categoryExpences, payload]};
        // case "DELETE_CATEGORY":
        //     return {};
        // case "DELETE_EXPENCE":
        //     return{};
        // case "UPDATE_EXPENCE":
        //     return{};
        default:
            return {state} 
    }
}