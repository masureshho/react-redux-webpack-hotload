import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
const rootAppReducer = combineReducers({
  sampleReducer,
  reduxAsyncConnect,
});
export default rootAppReducer;
