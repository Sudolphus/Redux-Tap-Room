import displayReducer from './../../reducers/display-reducer';
import * as d from './../../components/DisplayTypes';

describe('displayReducer', ()=>{
  const nullAction = {type: null};

  it('should do nothing if null action passed to reducer', ()=>{
    expect(displayReducer({}, nullAction)).toEqual({});
  });

  it('should be able to redirect to index', ()=>{
    expect(displayReducer(undefined, { type: d.INDEX })).toEqual({
      currentPage: d.INDEX,
      currentDrinkId: null,
      showDeleteModal: false
    });
  });

  it('should be able to redirect to details', ()=>{
    const action = {
      type: d.DETAILS,
      currentDrinkId: 1
    }
    expect(displayReducer(undefined, action)).toEqual({
      currentPage: d.DETAILS,
      currentDrinkId: 1,
      showDeleteModal: false
    });
  });

  it('should be able to redirect to create', ()=>{
    const action = {
      type: d.CREATE,
      currentDrinkId: null
    };
    expect(displayReducer(undefined, action)).toEqual({
      currentPage: d.CREATE,
      currentDrinkId: null,
      showDeleteModal: false
    });
  });

  // it('should be able to redirect to edit for a product', ()=>{
  //   const action = {
  //     type: d.EDIT,
  //     currentDrinkId: 3
  //   };
  //   expect(displayReducer(undefined, action)).toEqual({
  //     currentPage: d.EDIT,
  //     currentDrinkId: 3,
  //     showDeleteModal: false
  //   })
  // })

  it('should be able to toggle the delete modal', ()=>{
    const action = {
      type: d.TOGGLE_MODAL
    }
    const testState = {
      currentPage: d.DETAILS,
      currentDrinkId: 3,
      showDeleteModal: false
    }
    const testState2 = {
      currentPage: d.DETAILS,
      currentDrinkId: 3,
      showDeleteModal: true
    }
    expect(displayReducer(testState, action)).toEqual(testState2);
    expect(displayReducer(testState2, action)).toEqual(testState);
  })

  it('should be able to redirect to edit for a product without using the edit method', ()=>{
    const action = {
      type: d.CREATE,
      currentDrinkId: 3
    };
    expect(displayReducer(undefined, action)).toEqual({
      currentPage: d.CREATE,
      currentDrinkId: 3,
      showDeleteModal: false
    });
  });
})