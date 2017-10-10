import React from 'react';
import style from './Header.css';

import { connect } from 'react-redux';
import * as cartActions from '../store/actions/cartActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      totalPrice: 0
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      totalPrice: Object.keys(newProps.cart).reduce((acc, curr) => acc + newProps.cart[curr] * newProps.products.items[curr].price, 0)
    }, () => {
      this.setState({
        open: (this.state.open && !this.state.totalPrice) ? false : this.state.open
      });
    });
  }

  _toggleOpen() {
    this.setState({
      open: this.state.totalPrice && !this.state.open || false
    });
  }

  render() {
    let items = Object.keys(this.props.cart).map(id => 
      !!this.props.cart[id] && <li key={id} className="cart-item">
        <button className="price-controller down" onClick={() => this.props.removeFromStore(id)}>⇧</button> 
        <span className="amount"><code>{this.props.cart[id]}</code></span> 
        <button className="price-controller up" onClick={() => this.props.addToStore(id)}>⇧</button>
        <span className="header--product-name">{this.props.products.items[id].name}</span>
      </li>);

    return <div className="header">
      <h1 className="header-title">Grocery Store :Hackleague:</h1>
      <div className="header-cart">
        <button className="header--total-price" onClick={() => this._toggleOpen()}>
          { `${this.state.totalPrice}€` }
        </button>
        <div className="header-list" hidden={!this.state.open}>
          <ul>
            { items }
          </ul>
          <button onClick={() => console.log("Lucky! It's free this time ♥")} className="header-pay">PAY</button>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatch = dispatch => {
  return {
    addToStore: id => dispatch(cartActions.addToCartAction(id)),
    removeFromStore: id => dispatch(cartActions.removeFromCartAction(id))
  };
};

export default connect(mapStateToProps, mapDispatch)(Header);