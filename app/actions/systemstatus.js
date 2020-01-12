import { PublicAPI } from "./../helpers/axios";
import Get from "lodash/get";

export function update(data) {
  return { type: "UPDATE_SSTATUS", payload: data };
}

export function clear(data) {
  return { type: "CLEAR_SSTATUS", payload: data };
}

export function load(params) {
  return dispatch => {
    dispatch({ type: "FETCHING_SSTATUS", payload: {} });
    return PublicAPI.get(`/v1/status`, {})
      .then(res => {
        return dispatch({
          type: "FETCHED_SSTATUS",
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_SSTATUS_FAILED",
          payload: err
        });
        return Promise.reject(err);
      });
  };
}
