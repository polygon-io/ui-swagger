const initialState = {
  profile: null,
  isLoggedIn: false,
  fetching: false,
  fetched: false,
  shouldRedirect: false,
  error: null,
  fetchError: null,
  access: null,
  accessFetched: false,
  connections: null,
  connectionsFetched: false,
  apiKey: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      state = Object.assign({}, state, action.payload);
      break;
    case "LOGGINGIN_USER":
      state = Object.assign({}, state, {
        shouldRedirect: false,
        fetched: false,
        error: null,
        fetching: true
      });
      break;
    case "LOGIN_USER_FULFILLED":
      state = Object.assign({}, state, {
        fetched: true,
        error: null,
        fetching: false
      });
      break;
    case "NASDAQAGREEMENT_USER_FULFILLED":
      state = Object.assign({}, state, { profile: action.payload });
      break;
    case "NYSEAGREEMENT_USER_FULFILLED":
      state = Object.assign({}, state, { profile: action.payload });
      break;
    case "PROFSTATUS_USER_FULFILLED":
      state = Object.assign({}, state, { profile: action.payload });
      break;
    case "LOGIN_USER_FAILED":
      state = Object.assign({}, state, {
        shouldRedirect: false,
        fetched: true,
        error: action.payload,
        fetching: false,
        isLoggedIn: false
      });
      break;
    case "FETCH_USER_FULFILLED":
      state = Object.assign({}, state, {
        fetched: true,
        fetching: false,
        profile: action.payload,
        isLoggedIn: true
      });
      break;
    case "FETCHED_ACCOUNTING":
      state = Object.assign({}, state, {
        accessFetched: true,
        access: action.payload
      });
      break;
    case "FETCHED_CONNECTIONS":
      state = Object.assign({}, state, {
        connectionsFetched: true,
        connections: action.payload
      });
      break;
    case "FETCH_ACCOUNTING_FAILED":
      state = Object.assign({}, state, { accessFetched: true, access: null });
      break;
    case "FETCH_USER_FAILED":
      state = Object.assign({}, state, {
        shouldRedirect: false,
        fetched: true,
        fetchError: action.payload,
        fetching: false,
        isLoggedIn: false
      });
      break;
    case "CLEAR_USER":
      state = Object.assign({}, initialState, action.payload);
      break;
  }

  return state;
}
