import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { type, name, brand, price, alcoholContent, quantity, id } = action;
  switch (type) {
    case c.ADD_DRINK:
      return Object.assign({}, state, {
        [id]: {
          name,
          brand,
          price,
          alcoholContent,
          quantity,
          id
        }
      });
    case c.DELETE_DRINK:
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
  
}