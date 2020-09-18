import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { type, name, brand, price, alcoholContent, quantity, id, amount } = action;
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
    case c.CHANGE_QUANTITY:
      return Object.assign({}, state, {
        [id]: { ...state[id], quantity: Math.max(state[id].quantity + amount, 0)}
      });
    default:
      return state;
  }
  
}