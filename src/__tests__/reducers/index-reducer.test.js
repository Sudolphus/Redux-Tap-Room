import { createStore } from 'redux';
import * as a from './../../actions/index';
import rootReducer from './../../reducers/index';
import drinkListReducer from './../../reducers/drink-list-reducer';
import displayReducer from './../../reducers/display-reducer';

let store = createStore(rootReducer);

describe('rootReducer', ()=>{
  const nullAction = {type: null};

  it('should have an initial state that matches the drink list reducer', ()=>{
    expect(store.getState().drinkList).toEqual(drinkListReducer(undefined, nullAction));
  })

  it('should update the store in the same was as the drink list reducer', ()=>{
    const testDrink = {
      name: 'Test Ale',
      brand: 'Test Brand',
      price: 3.00,
      alcoholContent: 5.5,
      quantity: 124,
      id: 1
    };
    const testAction = a.addDrink(testDrink);
    store.dispatch(testAction);
    expect(store.getState().drinkList).toEqual(drinkListReducer(undefined, testAction));
  })

  it('should have an initial state that matches the display reducer', ()=>{
    expect(store.getState().display).toEqual(displayReducer(undefined, nullAction));
  })

  it('should update the store in the same way as the display reducer', ()=>{
    const testAction = a.viewDetails(4);
    store.dispatch(testAction);
    expect(store.getState().display).toEqual(displayReducer(undefined, testAction));
  })
})
