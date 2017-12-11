import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home'

export default class Main extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path ="/home" component={Home}/>
        </Switch>
      </div>
    )
  }

}