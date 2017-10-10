import React from 'react';
import styles from './ProductsList.css';

import { connect } from 'react-redux';

import Product from '../components/Product';
import * as cartActions from '../store/actions/cartActions';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let products = Object.keys(this.props.products.items).map(id => 
      <Product product={this.props.products.items[id]} id={id} key={ 'product' + id } currentAmount={ this.props.cart[id] } onAdd={this.props.addToCart} />
    );
    return <div className="products">
      { products }
    </div>;
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatch = dispatch => {
  return {
    addToCart: id => dispatch(cartActions.addToCartAction(id))
  };
};

export default connect(mapStateToProps, mapDispatch)(ProductList);