const SET_GROUPS = 'GENERATE_GROUPS';
const RESET_GROUPS = 'RESET_GROUPS';
import { generateGroups } from '../utils';

export const setNewGroups = groups => {
  return {
    type: SET_GROUPS, groups
  }
} 

export const resetGroups = () => {
  return{
    type: RESET_GROUPS
  }
} 

export default function reducer(state = [], action){
  switch(action.type){
    case SET_GROUPS: return action.groups;
    case RESET_GROUPS: return [];
    default: return state;
  }
} 

export const createNewGroups = namesList => dispatch => {
  let numsArr = generateGroups(namesList);
  return dispatch(setNewGroups(numsArr))
} 

