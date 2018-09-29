import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: [],
  dummy: '',
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.GET_USER: {
      return { ...state };
    }
    case actionTypes.DUMMY_1: {
      return { ...state, dummy: 'dummy1' };
    }
    case actionTypes.DUMMY_2: {
      return { ...state, dummy: 'dummy2' };
    }
    default: {
      return state;
    }
  }
}
