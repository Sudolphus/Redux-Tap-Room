import * as d from './../components/DisplayTypes';

export default (state = {currentPage: d.INDEX, currentDrinkId: null, showDeleteModal: false}, action) => {
  const { type, currentDrinkId } = action;
  switch (type) {
    case d.INDEX:
      return {
        currentPage: d.INDEX,
        currentDrinkId: null,
        showDeleteModal: false
      }
    case d.DETAILS:
      return {
        currentPage: d.DETAILS,
        currentDrinkId,
        showDeleteModal: false
      }
    case d.CREATE:
      return {
        currentPage: d.CREATE,
        currentDrinkId: null,
        showDeleteModal: false
      }
    case d.EDIT:
      return {
        currentPage: d.EDIT,
        currentDrinkId,
        showDeleteModal: false
      }
    case d.TOGGLE_MODAL:
      return { ...state, showDeleteModal: !state.showDeleteModal }
    default:
      return state;
  }
};