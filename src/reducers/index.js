import { combineReducers } from 'redux';

import user from './userReducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
