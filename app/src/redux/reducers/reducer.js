export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOCATION":
      return { ...state };
    case "FETCHING_DATA_START":
      return { ...state };
    case "FETCHING_DATA_SUCCESS":
      return { ...state };
    case "FETCHING_DATA_FAILURE":
      return { ...state };
    default:
      return state;
  }
};
