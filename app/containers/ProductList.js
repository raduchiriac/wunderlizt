import React from 'react';
import styles from './ProductList.css';

import Product from '../components/Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  render() {
    let products = this.props.products.map(p => 
      Product(p)
    )
    return <div className="products">
      { products }
    </div>;
  }
}

export default ProductList;