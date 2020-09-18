import displayReducer from './../../reducers/display-reducer';

describe('displayReducer', ()=>{
  const nullAction = {type: null};

  it('should do nothing if null action passed to reducer', ()=>{
    expect(displayReducer({}, nullAction)).toEqual({});
  })
})