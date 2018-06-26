import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize'
import {Link} from 'react-router-dom';


class Header extends Component{
  render(){
    return (
      <Navbar className="#2979ff blue accent-3" left>
        <NavItem className="left"><img id="bat" src={'images/bat.png'}/></NavItem>
        <NavItem><Link to={'/'}>Home</Link></NavItem>
        <NavItem><Link to={'/books'}>Books</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header
