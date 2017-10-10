import React from 'react';
import styles from './Product.css';

export default class Product extends React.Component {

  constructor(props) {
    super(props);
  }

  _increseAmount() {
    this.props.onAdd(this.props.id);
  }

  render() {
    return <div className="product" onClick={ () => this._increseAmount() }>
      <div className="image" style={{ backgroundImage: `url(${this.props.product.image})` }} />
      {!!this.props.currentAmount && <p className="current-amount">{ this.props.currentAmount }</p>}
      <p className="title">{ this.props.product.name }</p>
      <span className="price">{ `${this.props.product.price}€` }</span>
    </div>;
  }
}