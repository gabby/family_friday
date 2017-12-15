import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmployeeList, setNewGroups } from "../store"
import { error } from 'util';
import { RaisedButton } from 'material-ui';
import { lightBlueA400 } from 'material-ui/styles/colors';
import "../../public/style.scss";

class Home extends Component {
  constructor(props){
    super(props)
  }

  employeeNameUpload(file){
    fetch(file)
    .then(res => res.text())
    .then(textFile => textFile.split('\n'))
    .then(namesArr => {
      this.props.setList(namesArr)
    })
    .catch(error)
  }

  componentWillMount(props){
    let nameFile = '.../../public/employee_names.txt'
    if (!this.props.list.length){
      let cachedList = localStorage.getItem('list');
      let cachedGroups = localStorage.getItem('groups');
      if (cachedGroups) this.props.setGroups(JSON.parse(cachedGroups));
      if (cachedList) this.props.setList(cachedList.split(','));
      else if(!cachedList && !cachedGroups) {
        this.employeeNameUpload(nameFile);
      }
    }

  };

  render(){
    return (
      <div>
        <div className="home">
          <img className="banner" src="../../public/group_photo.jpg" />
        </div>
        <div className="groups-button">
          <Link to="/groups">
            <RaisedButton label="Groups" labelColor={ lightBlueA400 }/>
          </Link>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state =>{
  return {
    list: state.employeeList,
    groups: state.groups
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setList: list => {
      dispatch(setEmployeeList(list))
    },
    setGroups: groups => {
      dispatch(setNewGroups(groups))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
