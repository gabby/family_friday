import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';
import { FlatButton, List, ListItem, TextField } from 'material-ui';
import { getEmployeeList, addEmployeeName } from "../store"


class EmployeeList extends Component {
  constructor(props){
    super(props)
  }


  render(props){
    let names = this.props.list.sort();
    console.log(names)
    return (
      <div>
        <div className="add-name-button">
          <div>
            <form>
              <TextField type='text' name='name' floatingLabelText=' Employee Name' />
              <FlatButton type='Submit' label='Add' />
            </form>
          </div>
        </div>
        <div className="container employee-container">
          <List>
          {
            names.map(name => {
              return (
                <ListItem primaryText={name} disabled={true} key={name} className="name"/>
              )
            })
          }
          </List>
        </div>
      </div>
    )
  }
};
  
const mapStateToProps = state =>{
  return {
    list: state.employeeList
  }
}; 

const mapDispatchToProps = dispatch => {
  return {
    addName: name => {
        dispatch(addEmployeeName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
