import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store';
import { AppBar, FlatButton } from 'material-ui';
import { white, black } from 'material-ui/styles/colors';



const Navbar = () => {
  return (
    <AppBar 
    title="apartment list"
    titleStyle={{color:black}}
    iconElementLeft={<Link to="/home"><img src="/public/al_thumb.jpg"/></Link>}
    iconElementRight={<Link to="/list"><FlatButton type="button" label='Employee List' style={{backgroundColor:white, color:black}}></FlatButton></Link>}
    style={{backgroundColor:white}}>
    </AppBar>
  )
}

export default Navbar;