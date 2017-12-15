import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import groups from './groups';
import employeeList from './employeeList';
import exclusionList from './exclusionList';

export const reducer = combineReducers({
  groups,
  employeeList,
  exclusionList
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;

export * from './groups'
export * from './employeeList'
export * from './exclusionList'


