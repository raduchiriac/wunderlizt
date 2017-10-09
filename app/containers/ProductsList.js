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
    let products = Object.keys(this.props.items).map(id => 
      <Product product={this.props.items[id]} id={id} key={ 'product' + id } onAdd={this.props.addToCart} />
    );
    return <div className="products">
      { products }
    </div>;
  }
}

const mapStateToProps = (state) => {
  return state.products;
};

const mapDispatch = (dispatch) => {
  return {
    addToCart: (id, price) => dispatch(cartActions.addToCartAction(id, price))
  };
};

export default connect(mapStateToProps, mapDispatch)(ProductList);