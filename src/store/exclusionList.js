export const ADD_NAME = 'ADD_NAME'
export const RESET_LIST = 'RESET_LIST'

export const addExcludedName = name => {
  return {
    type: ADD_NAME,
    name
  }
}

export const resetExclusionList = () => {
  return {
    type: RESET_LIST
  }
}

export default function reducer(state=[], action){
  switch(action.type){
    case ADD_NAME: return [...state, action.name]
    case RESET_LIST: return []
    default: return state 
  }
}