import displayReducer from './../../reducers/display-reducer';
import * as d from './../../components/DisplayTypes';

describe('displayReducer', ()=>{
  const nullAction = {type: null};

  it('should do nothing if null action passed to reducer', ()=>{
    expect(displayReducer({}, nullAction)).toEqual({});
  });

  it('should be able to redirect to index', ()=>{
    expect(displayReducer(undefined, d.INDEX)).toEqual({
      currentPage: d.INDEX,
      currentDrinkId: null
    })
  })
})