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
    });
  }

  _toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let items = Object.keys(this.props.cart).map(id => 
      !!this.props.cart[id] && <li key={id}>
        <span className="pre"><code>{this.props.cart[id]}</code></span> 
        <button onClick={() => this.props.removeFromStore(id)}>-</button> <button onClick={() => this.props.addToStore(id)}>+</button>
        {this.props.products.items[id].name}
      </li>);

    return <div className="header">
      <h1 className="header-title">Grocery Store :Hackleague:</h1>
      <div className="header-cart">
        <button className="header-total-price" onClick={() => this._toggleOpen()}>
          { `${this.state.totalPrice}€` }
        </button>
        <div className="header-list" hidden={!this.state.open}>
          <ul>
            { items }
          </ul>
          <button className="header-pay">PAY</button>
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