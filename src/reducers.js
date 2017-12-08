import { INIT_EDT } from './actions';
import { combineReducers } from 'redux';

function edt(state,action){
  switch(action.type){
    case INIT_EDT:
      return action.edt;
    default:
      return null;
  }
}

export default combineReducers({edt});
