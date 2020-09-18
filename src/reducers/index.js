import { combineReducers } from 'redux';
import drinkListReducer from './drink-list-reducer';

const rootReducer = combineReducers({
  drinkList: drinkListReducer
})

export default rootReducer;