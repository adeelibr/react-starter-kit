import * as actionTypes from './actionTypes';
import BookingAPI from '../api/BookingAPI';

const onLoadBookingListSuccess = list => ({
  type: actionTypes.GET_ALL_BOOKING_LIST,
  list,
});

export function onLoadBookingList() {
  return async dispatch => {
    try {
      const list = await BookingAPI.onGetBookingList();
      dispatch(onLoadBookingListSuccess(list));
      return list;
    } catch (error) {
      return error;
    }
  };
}

export function deleteThisLaterDummyProcedure() {
  return async dispatch => {
    try {
      const list = await BookingAPI.onGetBookingList();
      dispatch(onLoadBookingListSuccess(list));
      return list;
    } catch (error) {
      return error;
    }
  };
}
