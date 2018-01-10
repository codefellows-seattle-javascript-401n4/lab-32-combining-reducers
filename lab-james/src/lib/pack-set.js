export const packSet = (id, pack) => {
  if(pack.id !== id){
    pack.render = false;
  }
  if(pack.id === id){
    pack.render = true;
  }

  return pack;
};
