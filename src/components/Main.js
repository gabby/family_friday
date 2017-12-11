import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import EmployeeList from './EmployeeList';

export default class Main extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path ="/" component={Home}/>
          <Route exact path ="/list" component={EmployeeList}/>
        </Switch>
      </div>
    )
  }

}