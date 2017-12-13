import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store, { resetGroups } from '../store';
import { FlatButton, List, ListItem, TextField } from 'material-ui';
import { addEmployeeName } from "../store"
import { lightBlueA400 } from 'material-ui/styles/colors';


class EmployeeList extends Component {
  constructor(props){
    super(props);
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
  }

  // Handler for Add New Employee
  handleAddEmployee(event, name){
    event.preventDefault();
    // Current groups no longer valid with addition of new employee, remove items from local storage and reset state 
    localStorage.removeItem('date');
    localStorage.removeItem('groups');
    this.props.resetGroups();
    // Dispatch action to add name to list, updates redux store
    this.props.addName(event.target.name.value);
    // clear text field
    event.target.name.value = ''
  } 

  componentWillUnmount(){  
    // save the most updated list
    localStorage.setItem('list', this.props.list)  
  }

  render(props){
    let names = this.props.list.sort();
    return (
      <div>
        <div className="add-name-button">
          <div>
            <form onSubmit={this.handleAddEmployee}>
              <TextField type='text' name='name' floatingLabelText=' Employee Name'/>
              <FlatButton type='Submit' label='Add' labelStyle={{color:lightBlueA400}} />
            </form>
          </div>
        </div>
        <div className="employee-container">
          <List className="employee-list">
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
    },
    resetGroups: () => {
      dispatch(resetGroups())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
