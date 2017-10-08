import React, { Component } from 'react';
import { render } from 'react-dom';

import style from './style.css';
import logo from './assets/react-logo.png'

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={ logo } alt='React logo' />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'))
