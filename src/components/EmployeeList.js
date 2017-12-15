import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store, { resetGroups } from '../store';
import { FlatButton, List, ListItem, TextField, RaisedButton } from 'material-ui';
import { addEmployeeName, addExcludedName } from "../store"
import { lightBlueA400 } from 'material-ui/styles/colors';


class EmployeeList extends Component {
  constructor(props){
    super(props);
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
    this.handleAddExcluded = this.handleAddExcluded.bind(this);
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

  handleAddExcluded(event){
    event.preventDefault();
    this.props.addExclusion(event.target.id);
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
              <TextField type='text' name='name' floatingLabelText='Employee Name'/>
              <FlatButton type='Submit' label='Add' labelStyle={{color:lightBlueA400}} />
            </form>
          </div>
        </div>
        <div className="employee-container">
          <List className="employee-list">
          {
            names.map(name => {
              return (
                <div key={name}>
                  <ListItem disabled={true} className="name">{name} <button className="remove-btn" type="button" key={name} onClick={this.handleAddExcluded} id={name}>Remove</button></ListItem>
                </div>
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
    },
    addExclusion: name => {
      dispatch(addExcludedName(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
