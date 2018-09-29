import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const enhancer = compose(applyMiddleware(thunk));

export default initialState => {
  return createStore(rootReducer, initialState, enhancer);
};
