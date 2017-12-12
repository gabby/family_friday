import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNewGroups, resetGroups } from "../store";
import { AppBar, Subheader, Divider, Paper, List, ListItem, RaisedButton } from 'material-ui';
import "../../public/style.scss"

class Groups extends Component {
  constructor(props){
    super(props)
    this.generateGroups = this.generateGroups.bind(this)
    this.findGroupSize = this.findGroupSize.bind(this)
    this.handleResetGroups = this.handleResetGroups.bind(this)
  }

  // Helper function to determine Group Size 
  findGroupSize(groupSize){
    /* Logic: Determine if group size evenly distributes across those 3-5 team sizes */
    if (groupSize%5 === 0) return groupSize/5
    else if (groupSize%4 === 0) return groupSize/4
    else if (groupSize%3 === 0) return groupSize/3;
    // If not, divide the team by 5 (rounding up), can remove names to move to a smaller group but cannot remove names from groups of 3, for example. This ensure that no team will be fewer than 3 and more than 5. 
    else return Math.ceil(groupSize/5)
  }

  // Helper function to randomly distibute names into groups
  generateGroups(names){
    let groups = this.findGroupSize(names.length), namesArr = [], counter = 0;
    // Initilize namesArr with the number of groups deteremined from above helper functions
    for (let i=0; i<groups; i++){ 
      namesArr[i] = [];
    }
    // Randomly select names, push into groups and remove that name from the unallocated list
    while (names.length){
      let randomIdx = Math.floor(Math.random() * names.length)
      // To ensure even distribution, push to each group, reset group counter when one name has been added to each group, then concat the names list to remove the allocated name
      if (counter === groups) counter = 0;
      namesArr[counter].push(names[randomIdx])
      names = names.slice(0, randomIdx).concat(names.slice(randomIdx + 1))
      counter++
    }
    return namesArr;
  }

  componentWillMount(){
    // If local storage does not have a value for the 'groups' key, then before mounting, the component will generate new groups, save it to the redux store and save it to local storage, along with a generated timestamp 
    // Saving groups to local storage allows users to review same list if the window is closed
    if (!this.props.groups.length) {
      let groupedNames = this.generateGroups(this.props.list)
      let newDate = new Date()
      localStorage.setItem('date_generated', newDate)
      localStorage.setItem('groups', JSON.stringify(groupedNames))
      return this.props.setGroups(groupedNames);
    }
  }

  handleResetGroups(event){
    event.preventDefault();
    this.props.reset();
    localStorage.removeItem('groups');
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
            <RaisedButton type='button' label='Reset' onClick={this.handleResetGroups}/>
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
    setGroups: groups => {
        dispatch(setNewGroups(groups))
    },
    reset: () => {
      dispatch(resetGroups())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Groups);