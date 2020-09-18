import drinkListReducer from './../../reducers/drink-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('drinkListReducer', ()=>{
  const testDrink = {
    name: 'Test Ale',
    brand: 'Test Brand',
    price: 3.00,
    alcoholContent: 5.5,
    quantity: 124,
    id: 1
  };

  it('should do nothing if given a blank reducer', ()=>{
    expect(drinkListReducer({}, {type: null})).toEqual({});
  });

  it('should add a drink to the list', ()=>{
    const { name, brand, price, alcoholContent, quantity, id } = testDrink;
    const action = {
      type: c.ADD_DRINK,
      name,
      brand,
      price,
      alcoholContent,
      quantity,
      id
    }
    expect(drinkListReducer({}, action)).toEqual({
      1: {
        name,
        brand,
        price,
        alcoholContent,
        quantity,
        id
      }
    })
  })
})
