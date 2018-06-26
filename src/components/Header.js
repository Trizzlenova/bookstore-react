import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/books'}>Books</Link>
      </header>
    )
  }
}

export default Header