import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

export default class Main extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path ="/home" component={Home}/>
        </Switch>
      </div>
    )
  }

}