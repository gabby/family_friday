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
  }

  componentDidMount(){
    let namesArr = [], groups;
    let names = this.props.list, total = names.length;
    if (total%5 === 0) return groups = total/5
    else if (total%4 === 0) return groups = total/4
    else if (total%3 === 0) return groups = total/3;
    else {
      groups = Math.ceil(total/5)
      let counter = 0;
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
    }
    console.log(namesArr)
    this.props.setGroups(namesArr)
  }

  render(props){
    let groups = this.props.groups;
    return(
      <div className="groups-container"> 
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