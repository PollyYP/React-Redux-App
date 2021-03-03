const initialState = {
  name: "",
  temp: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA_START":
      return { ...state, name: action.payload, temp: action.payload };
    case "FETCHING_DATA_SUCCESS":
      return { ...state };
    case "FETCHING_DATA_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
