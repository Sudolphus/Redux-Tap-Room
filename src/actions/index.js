import * as c from './ActionTypes';

export const addDrink = (drink) => {
  const { name, brand, price, alcoholContent, quantity, id } = drink;
  return({
    type: c.ADD_DRINK,
    name,
    brand,
    price,
    alcoholContent,
    quantity,
    id
  });
};

export const deleteDrink = (id) => {
  return ({
    type: c.DELETE_DRINK,
    id
  });
};