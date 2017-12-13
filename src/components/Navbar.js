import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store';
import { AppBar, FlatButton } from 'material-ui';
import { white, blueGrey900 } from 'material-ui/styles/colors';



const Navbar = () => {
  return (
    <AppBar 
      title="apartment list"
      titleStyle={{color:blueGrey900}}
      iconElementLeft={<Link to="/"><img src="/public/al_thumb.jpg"/></Link>}
      iconElementRight={<Link to="/list"><FlatButton type="button" label='Employee List' style={{backgroundColor:white, color:blueGrey900}}>
      </FlatButton></Link>}
      style={{backgroundColor:white}}>
    </AppBar>
  )
}

export default Navbar;