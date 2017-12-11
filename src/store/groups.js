const GENERATE_GROUPS = 'GENERATE_GROUPS';
const RESET_GROUPS = 'RESET_GROUPS';

const generateNewGroups = (groups) => {
  return {
    type: GENERATE_GROUPS, groups
  }
} 

const resetGroups = () => {
  return{
    type: RESET_GROUPS
  }
} 

export default function reducer(state = [], action){
  switch(action.type){
    case GENERATE_GROUPS: return action.groups;
    case RESET_GROUPS: return [];
    default: return state;
  }
}