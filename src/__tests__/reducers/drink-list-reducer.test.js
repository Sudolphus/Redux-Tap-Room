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

  const testDrink2 = {
    name: 'Test Ale 2',
    brand: 'Test Brand 2',
    price: 4.00,
    alcoholContent: 6.5,
    quantity: 124,
    id: 2
  };

  const testState = {
    1: {
      name: 'Test Ale',
      brand: 'Test Brand',
      price: 3.00,
      alcoholContent: 5.5,
      quantity: 124,
      id: 1
    },
    2: {
      name: 'Test Ale 2',
      brand: 'Test Brand 2',
      price: 4.00,
      alcoholContent: 6.5,
      quantity: 124,
      id: 2
    }
  }
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
    });
  });

  it('should be able to update a drink', ()=>{
    const { name, brand, price, alcoholContent, quantity, id } = testDrink;
    const { name2, brand2, price2, alcoholContent2, quantity2 } = testDrink2;
    const action = {
      type: c.ADD_DRINK,
      name,
      brand,
      price,
      alcoholContent,
      quantity,
      id
    };
    const startTestState = drinkListReducer({}, action);
    const action2 = {
      type: c.ADD_DRINK,
      name2,
      brand2,
      price2,
      alcoholContent2,
      quantity2,
      id
    };
    expect(drinkListReducer(startTestState, action2)).toEqual({
      1: {
        name2,
        brand2,
        price2,
        alcoholContent2,
        quantity2,
        id: 1
      }
    });
  });

  it('should be able to delete a drink', ()=>{
    const action = {
      type: c.DELETE_DRINK,
      id: 1
    };
    expect(drinkListReducer(testState, action)).toEqual({
      2: {
        name: 'Test Ale 2',
        brand: 'Test Brand 2',
        price: 4.00,
        alcoholContent: 6.5,
        quantity: 124,
        id: 2
      }
    })
  })

  it('should be able to increase the number of drinks remaining', ()=>{
    const action = {
      type: c.CHANGE_QUANTITY,
      amount: 1,
      id: 1
    }
    expect(drinkListReducer(testState, action)).toEqual({
      1: {
        name: 'Test Ale',
        brand: 'Test Brand',
        price: 3.00,
        alcoholContent: 5.5,
        quantity: 125,
        id: 1
      },
      2: {
        name: 'Test Ale 2',
        brand: 'Test Brand 2',
        price: 4.00,
        alcoholContent: 6.5,
        quantity: 124,
        id: 2
      }
    });
  });

  it('should be able to decrease the number of drinks remaining', ()=>{
    const action = {
      type: c.CHANGE_QUANTITY,
      amount: -1,
      id: 1
    }
    expect(drinkListReducer(testState, action)).toEqual({
      1: {
        name: 'Test Ale',
        brand: 'Test Brand',
        price: 3.00,
        alcoholContent: 5.5,
        quantity: 123,
        id: 1
      },
      2: {
        name: 'Test Ale 2',
        brand: 'Test Brand 2',
        price: 4.00,
        alcoholContent: 6.5,
        quantity: 124,
        id: 2
      }
    });
  });
});
