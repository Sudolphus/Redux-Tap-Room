import { createStore } from 'redux';
import rootReducer from './../../reducers/index';
import drinkListReducer from './../../reducers/drink-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', ()=>{
  const nullAction = {type: null};

  it('should have an initial state that matches the drink list reducer', ()=>{
    expect(store.getState().drinkList).toEqual(drinkListReducer(undefined, nullAction));
  })
})
