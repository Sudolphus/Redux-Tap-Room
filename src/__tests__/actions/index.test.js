import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('actions', ()=>{
  const testDrink = {
    name: 'Test Ale',
    brand: 'Test Brand',
    price: 3.00,
    alcoholContent: 5.5,
    quantity: 124,
    id: 1
  };
  const { name, brand, price, alcoholContent, quantity, id } = testDrink;
  
  it('should be able to create an add drink action', ()=>{
    expect(a.addDrink(testDrink)).toEqual({
      type: c.ADD_DRINK,
      name,
      brand,
      price,
      alcoholContent,
      quantity,
      id
    })
  })
})