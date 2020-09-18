import { combineReducers } from 'redux';
import drinkListReducer from './drink-list-reducer';
import displayReducer from './display-reducer';

const rootReducer = combineReducers({
  drinkList: drinkListReducer,
  display: displayReducer
})

export default rootReducer;