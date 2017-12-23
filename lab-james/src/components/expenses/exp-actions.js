import uuid from 'uuid/v4';

export const createExp = exp => {
  exp.id = uuid();
  exp.createDate = new Date();

  return {
    type: 'EXP_ADD',
    payload: exp,
  };
};

export const tallyExp = exp => {
  return {
    type: 'EXP_TALLY',
    payload: exp,
  };
};
