import * as c from './ActionTypes';
import * as d from './../components/DisplayTypes';

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

export const changeQuantity = (amount, id) => {
  return ({
    type: c.CHANGE_QUANTITY,
    amount,
    id
  })
}

export const viewIndex = () => {
  return ({
    type: d.INDEX
  })
}

export const viewDetails = (currentDrinkId) => {
  return ({
    type: d.DETAILS,
    currentDrinkId
  })
}

export const create = (currentDrinkId = null) => {
  return ({
    type: d.CREATE,
    currentDrinkId
  })
}

export const toggleModal = () => {
  return ({
    type: d.TOGGLE_MODAL
  })
}