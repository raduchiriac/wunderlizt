import React from 'react';
import style from './Header.css';

import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  _toggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    let items = Object.keys(this.props.cart).map(id => <li key={id}>{this.props.cart[id]} - {this.props.products.items[id].name} * {this.props.products.items[id].price}</li>);
    let totalPrice = Object.keys(this.props.cart).reduce((acc, curr) => acc + this.props.cart[curr]*this.props.products.items[curr].price, 0);

    return <div className="header">
      <h1 className="header-title">Grocery Store :Hackleague:</h1>
      <div className="header-cart">
        <button onClick={() => this._toggleOpen()}>
          { `${totalPrice}€` }
        </button>
        <ul className="header-list" hidden={!this.state.open}>
          { items }
        </ul>
      </div>
    </div>;
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Header);