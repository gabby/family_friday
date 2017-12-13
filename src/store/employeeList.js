export const SET_LIST = "SET_LIST"
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export const setEmployeeList = list => {
  return {
    type: SET_LIST, list
  }
} 

export const addEmployeeName = (name) => {
  return{
    type: ADD_EMPLOYEE, name
  }
} 

export default function reducer(state = [], action){
  switch(action.type){
    case SET_LIST: return action.list;
    case ADD_EMPLOYEE: return [...state, action.name];
    default: return state;
  }
}