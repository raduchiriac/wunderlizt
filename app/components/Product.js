import React from 'react';
import styles from './Product.css';

const Product = product => (
  <div className="product" key={ 'product' + product.id }>
    <div className="image" style={{ backgroundImage: 'url('+product.image+')' }} />
    <p>{ product.name }</p>
    <span>{ product.price }</span>
  </div>
);

export default Product;