const initialState = {
  name: "Bangkok",
  temp: 30,
  feels_like: 34.63,
  icon: "02n",
  description: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA_START":
      return { ...state };
    case "FETCHING_DATA_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        temp: Math.round(action.payload.main.temp / 10),
        feels_like: Math.round(action.payload.main.feels_like / 10),
        icon: action.payload.weather[0].icon,
        description: action.payload.weather[0].description,
      };
    case "FETCHING_DATA_FAILURE":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
