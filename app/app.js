import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import * as productsActions from './store/actions/productsActions';

import store from './store';
import style from './style.css';
import db from './db.json';

import ProductsList from './containers/ProductsList.js';
import Header from './containers/Header.js';

export default class App extends React.Component {
  render() {
    return <div>
      <Header />
      <ProductsList />
    </div>;
  }
}

store.dispatch({type: productsActions.LOAD_PRODUCTS, payload: db.products});

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app'));
