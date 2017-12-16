const emptyState = {};

export default (state=emptyState, {type, payload}) => {
  switch(type){
    case 'NOTE_CREATE':
      console.log('note created');
      return state;
    default:
      return state;
  }
}