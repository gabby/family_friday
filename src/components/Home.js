import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setEmployeeList } from "../store"
import { error } from 'util';


class Home extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(props){
    fetch('.../../public/employee_names.txt')
    .then(res => res.text())
    .then(textFile => textFile.split('\n'))
    .then(namesArr => {
      console.log(namesArr)
      this.props.setList(namesArr)
    })
    .catch(error)
  };

  render(){
    return (
      <div>
        HELLO LA LA LAND
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
