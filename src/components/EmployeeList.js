import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store, { resetGroups } from '../store';
import { FlatButton, List, ListItem, TextField } from 'material-ui';
import { addEmployeeName } from "../store"


class EmployeeList extends Component {
  constructor(props){
    super(props);
    this.handleAddEmployee = this.handleAddEmployee.bind(this);
  }

  handleAddEmployee(event, name){
    event.preventDefault();
    localStorage.removeItem('date');
    localStorage.removeItem('groups');
    this.props.resetGroups();
    this.props.addName(event.target.name.value);
    localStorage.setItem('list', this.props.list)
    event.target.name.value = ''
  }

  render(props){
    let names = this.props.list.sort();
    return (
      <div>
        <div className="add-name-button">
          <div>
            <form onSubmit={this.handleAddEmployee}>
              <TextField type='text' name='name' floatingLabelText=' Employee Name'/>
              <FlatButton type='Submit' label='Add' />
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
