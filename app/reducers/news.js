const initialState = {
  items: [],
  fetching: false,
  fetched: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_NEWS_FULFILLED":
      state = Object.assign({}, state, { items: action.payload });
      break;
    case "UPDATE_NEWS":
      state = Object.assign({}, state, action.payload);
      break;
    case "CLEAR_NEWS":
      state = Object.assign({}, initialState);
      break;
  }

  return state;
}
