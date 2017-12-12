import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmployeeList, setGroups } from "../store"
import { error } from 'util';
import { RaisedButton } from 'material-ui';
import "../../public/style.scss";


class Home extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(props){
    if (!this.props.list.length) {
      fetch('.../../public/employee_names.txt')
      .then(res => res.text())
      .then(textFile => textFile.split('\n'))
      .then(namesArr => {
        this.props.setList(namesArr)
      })
      .catch(error)
    }
    const localSto = localStorage.getItem('groups');
    if (localSto) return this.props.setGroups(JSON.parse(localSto));
  };

  render(){
    return (
      <div>
        <div className="home">
         <img className="banner" src="../../public/group_photo.jpg" />
        </div>
        <div className="groups-button">
          <Link to="/groups">
            <RaisedButton label="Groups"/>
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
