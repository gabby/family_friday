const SET_LIST = "SET_LIST"
const GET_LIST = 'GET_LIST';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const setEmployeeList = list => {
  return {
    type: SET_LIST, list
  }
} 

export const getEmployeeList = () => {
  return {
    type: GET_LIST
  }
} 

export const addEmployeeName = (name) => {
  return{
    type: ADD_EMPLOYEE, name
  }
} 

export default function reducer(state = [], action){
  switch(action.type){
    case SET_LIST: return action.list
    case GET_LIST: return state;
    case ADD_EMPLOYEE: return [...state, action.name];
    default: return state;
  }
}