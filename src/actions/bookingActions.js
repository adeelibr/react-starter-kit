import * as actionTypes from './actionTypes';
import AuthenticationAPI from '../api/AuthenticationAPI';

const onLoadSuccess = list => ({
  type: actionTypes.DUMMY_1,
  list,
});

export function onLoadBookingList() {
  return async dispatch => {
    try {
      const list = await AuthenticationAPI.onGetBookingList();
      dispatch(onLoadSuccess(list));
      return list;
    } catch (error) {
      return error;
    }
  };
}

export function deleteThisLaterDummyProcedure() {
  return async dispatch => {
    try {
      const list = await AuthenticationAPI.onGetBookingList();
      dispatch(onLoadSuccess(list));
      return list;
    } catch (error) {
      return error;
    }
  };
}
