import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNewGroups } from "../store";
import { AppBar, Subheader, Divider, Paper, List, ListItem } from 'material-ui';
import { white, black } from 'material-ui/styles/colors';
import "../../public/style.scss"

class Groups extends Component {
  constructor(props){
    super(props)
    this.generateGroups = this.generateGroups.bind(this)
    this.findGroupSize = this.findGroupSize.bind(this)
  }

  findGroupSize(groupSize){
    if (groupSize%5 === 0) return groupSize/5
    else if (groupSize%4 === 0) return groupSize/4
    else if (groupSize%3 === 0) return groupSize/3;
    else return Math.ceil(groupSize/5)
  }

  generateGroups(names){
    let groups = this.findGroupSize(names.length), namesArr = [], counter = 0;
    for (let i=0; i<groups; i++){ 
      namesArr[i] = [];
    }
    while (names.length){
      let randomIdx = Math.floor(Math.random() * names.length)
      if (counter === groups) counter = 0;
      namesArr[counter].push(names[randomIdx])
      names = names.slice(0, randomIdx).concat(names.slice(randomIdx + 1))
      counter++
    }
    return namesArr;
  }

  componentWillMount(){
    if (!this.props.groups.length) {
      let groupedNames = this.generateGroups(this.props.list)
      let newDate = new Date()
      localStorage.setItem('date_generated', newDate)
      localStorage.setItem('groups', JSON.stringify(groupedNames))
      return this.props.setGroups(groupedNames);
    }
  }

  render(props){
    let groups = this.props.groups;
    let date = localStorage.getItem('date_generated')
    return(
      <div className="groups-container">
        <h2>Groups for Family Friday</h2> 
        <h6>Generated on: {date}</h6>
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
    setGroups: groups => {
        dispatch(setNewGroups(groups))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);