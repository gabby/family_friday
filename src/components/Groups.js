import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createNewGroups, resetGroups } from "../store";
import { AppBar, Subheader, Divider, Paper, List, ListItem, RaisedButton } from 'material-ui';
import "../../public/style.scss"
import { lightBlueA400 } from 'material-ui/styles/colors';

class Groups extends Component {
  constructor(props){
    super(props)
    this.handleResetGroups = this.handleResetGroups.bind(this)
  }

  componentWillMount(){
    if (!this.props.groups.length) {
      return this.props.setGroups(this.props.list);
    }
  }

  // Handle if user wants to reset the groups, for example, if saved from last week's local storage
  handleResetGroups(event){
    event.preventDefault();
    this.props.resetGroups();
    localStorage.removeItem('groups');
    this.props.history.push('/')
  }

  render(props){
    let groups = this.props.groups;
    let date = localStorage.getItem('date_generated')
    return(
      <div className="groups-container">
        <h2>Groups for Family Friday</h2> 
        <h6>Generated on: {date}</h6>
        <div className="reset-button">
          <Link to="/">
            <RaisedButton type='button' label='Reset' onClick={this.handleResetGroups} labelColor={lightBlueA400}/>
          </Link>
        </div>
        <div className="groups"> 
          {
            groups.map(group => {
              return (
                <Paper className="paper-group" key={groups.indexOf(group)}>
                  <List>
                    <Subheader>Group {(groups.indexOf(group)+1)}</Subheader>
                    <Divider />
                    {
                      group.map(name => {
                        return (
                          <ListItem primaryText={name} disabled={true} key={(name + group.indexOf(name))}/>
                        )
                      })
                    }
                  </List>
                </Paper>
              )
            })
          }
        </div>
      </div>
    )
  }
};
  
const mapStateToProps = state =>{
  return {
    groups: state.groups,
    list: state.employeeList
  }
}; 

const mapDispatchToProps = dispatch => {
  return {
    setGroups: list => {
      dispatch(createNewGroups(list))
    },
    resetGroups: () => {
      dispatch(resetGroups())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);