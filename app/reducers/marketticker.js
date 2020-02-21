import Map from "lodash/map";
import Flatten from "lodash/flatten";

const initialState = {
  loaded: false,
  fetching: false,
  items: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_APP":
      state = Object.assign({}, state, action.payload);
      break;
    case "CLEAR_APP":
      state = Object.assign({}, initialState);
      break;
    case "FETCHING_MARKET_TICKER":
      state = Object.assign({}, state, { loaded: false, fetching: true });
      break;
    case "FETCHED_MARKET_TICKER":
      let items = [];
      typePush("stocks", action.payload.stocks, items);
      typePush("crypto", action.payload.crypto, items);
      typePush("currencies", action.payload.currencies, items);
      state = Object.assign({}, state, {
        loaded: true,
        fetching: false,
        items: Flatten(items)
      });
      break;
  }

  return state;
}

function typePush(type, itemObjects, finalArray) {
  finalArray.push(
    Map(itemObjects, item => {
      return {
        type: type,
        data: item
      };
    })
  );
}
