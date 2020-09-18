import * as d from './../components/DisplayTypes';

export default (state = {currentPage: d.INDEX, currentDrinkId: null}, action) => {
  const {type} = action;
  switch (type) {
    case d.INDEX:
      return {
        currentPage: d.INDEX,
        currentDrinkId: null
      }
    default:
      return state;
  }
};