import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes';
import * as d from './../../components/DisplayTypes';

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
    });
  });

  it('should be able to create a delete drink action', ()=>{
    expect(a.deleteDrink(1)).toEqual({
      type: c.DELETE_DRINK,
      id: 1
    });
  });

  it('should be able to create a change quantity action', ()=>{
    expect(a.changeQuantity(13, 1)).toEqual({
      type: c.CHANGE_QUANTITY,
      amount: 13,
      id: 1
    });
  });

  it('should be able to create a view index action', ()=>{
    expect(a.viewIndex()).toEqual({
      type: d.INDEX
    });
  });

  it('should be able to create a view details action', ()=>{
    expect(a.viewDetails(10)).toEqual({
      type: d.DETAILS,
      currentDrinkId: 10
    });
  });

  it('should be able to create a create action', ()=>{
    expect(a.create()).toEqual({
      type: d.CREATE
    });
  });
})