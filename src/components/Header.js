import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize'
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <Navbar className="#2979ff blue accent-3" brand='logo' right>
        <NavItem><Link to={'/'}>Home</Link></NavItem>
        <NavItem><Link to={'/books'}>Books</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header
