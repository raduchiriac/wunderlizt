import React from 'react';
import styles from './ProductsList.css';

import { connect } from 'react-redux';

import Product from '../components/Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }

  render() {
    let products = (this.state.items || []).map(p => 
      Product(p)
    )
    return <div className="products">
      { products }
    </div>;
  }
}

function mapState(state) {
  return state.products;
}

function mapDispatch(dispatch) {
  return {
    //addToCart: () => dispatch(ACTION)
  };
}

export default connect(mapState, mapDispatch)(ProductList);