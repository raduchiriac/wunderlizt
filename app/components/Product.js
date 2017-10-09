import React from 'react';
import styles from './Product.css';

export default class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAmount: 0
    };
  }

  _increseAmount() {
    this.props.onAdd(this.props.product.id, this.props.product.price);
    this.setState({
      currentAmount: this.state.currentAmount+1
    });
  }

  render() {
    return <div className="product" onClick={ () => this._increseAmount() }>
      <div className="image" style={{ backgroundImage: 'url('+this.props.product.image+')' }} />
      {!!this.state.currentAmount && <p className="current-amount">{ this.state.currentAmount }</p>}
      <p className="title">{ this.props.product.name }</p>
      <span className="price">{ this.props.product.price + '€' }</span>
    </div>;
  }
}