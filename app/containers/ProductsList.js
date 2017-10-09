import React from 'react';
import styles from './ProductsList.css';

import { connect } from 'react-redux';

import Product from '../components/Product';
import * as cartActions from '../store/actions/cartActions';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props);
  }

  render() {
    let products = (this.state.items || []).map(p => 
      <Product product={p} key={ 'product' + p.id } onAdd={this.props.addToCart} />
    );
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
    addToCart: (id, price) => dispatch(cartActions.addToCartAction(id, price))
  };
}

export default connect(mapState, mapDispatch)(ProductList);