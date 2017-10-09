import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import reducers from './store/reducers';
import * as productsActions from './store/actions/productsActions';
import style from './style.css';
import db from './db.json';

import ProductsList from './containers/ProductsList.js';

export default class App extends Component {
  render() {
    return <ProductsList />
  }
}

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch({type: productsActions.LOAD_PRODUCTS, payload: db.products});

render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('app'));
