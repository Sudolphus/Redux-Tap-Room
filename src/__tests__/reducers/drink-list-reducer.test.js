import drinkListReducer from './../../reducers/drink-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('drinkListReducer', ()=>{
  it('should do nothing if given a blank reducer', ()=>{
    expect(drinkListReducer({}, {action: null})).toEqual({});
  })
})
