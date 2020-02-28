const initialState = {
  title: "Polygon.io - Stock Data",
  definitionLink: "/docs/swagger.json"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_APP":
      state = Object.assign({}, state, action.payload);
      break;
    case "CLEAR_APP":
      state = Object.assign({}, initialState);
      break;
  }

  return state;
}
