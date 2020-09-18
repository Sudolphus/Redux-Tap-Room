import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as d from './components/DisplayTypes';

const initialState = {
  drinkList: {
    'testDrink': {
      name: 'testName',
      brand: 'testBrand',
      price: 1.00,
      alcoholContent: 2.2,
      quantity: 5,
      id: 'testDrink'
    }
  },
  display: {currentPage: d.INDEX, currentDrinkId: null, showDeleteModal: false}
}
const store = createStore(reducer, initialState);
store.subscribe(()=>console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
