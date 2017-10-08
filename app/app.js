import React, { Component } from 'react';
import { render } from 'react-dom';

import style from './style.css';
import logo from './assets/react-logo.png';

import db from './db.json';

import ProductList from './containers/ProductList.js';

export default class App extends Component {
  render() {
    return <ProductList products={db.products} />
  }
}

render(<App />, document.getElementById('app'))
