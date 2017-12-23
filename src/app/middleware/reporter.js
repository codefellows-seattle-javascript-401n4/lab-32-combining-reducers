let reporter = store => next=> action =>{
    console.log('In reporter');
    console.log('Action:::::', action)
    try{
        next(action);
        console.log(store.getState())
    }
    catch(error){
        error.action = action;
        console.error(error.message)
    }
}
export default reporter;