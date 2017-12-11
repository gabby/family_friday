import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setEmployeeList } from "../store"
import { error } from 'util';
import { RaisedButton } from 'material-ui';
import "../../public/style.scss";


class Home extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(props){
    fetch('.../../public/employee_names.txt')
    .then(res => res.text())
    .then(textFile => textFile.split('\n'))
    .then(namesArr => {
      this.props.setList(namesArr)
    })
    .catch(error)
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
  

const mapDispatchToProps = dispatch => {
  return {
    setList: list => {
      dispatch(setEmployeeList(list))
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);
