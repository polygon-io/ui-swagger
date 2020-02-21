import { PublicAPI } from "./../helpers/axios";
import Get from "lodash/get";

export function update(data) {
  return { type: "UPDATE_MARKET_TICKER", payload: data };
}

export function clear(data) {
  return { type: "CLEAR_MARKET_TICKER", payload: data };
}

export function load(params) {
  return dispatch => {
    dispatch({ type: "FETCHING_MARKET_TICKER", payload: {} });
    return PublicAPI.get(`/v2/market/now`, {})
      .then(res => {
        return dispatch({
          type: "FETCHED_MARKET_TICKER",
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: "FETCH_MARKET_TICKER_FAILED",
          payload: err
        });
        return Promise.reject(err);
      });
  };
}
