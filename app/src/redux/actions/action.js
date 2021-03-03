import axios from "axios";

export const getData = (dispatch) => {
  dispatch({ type: "FETCHING_DATA_START" });
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8c7f85534d8b5e62ac8a933e384edafe"
    )
    .then((res) => {
      dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCHING_DATA_FAILURE", payload: err });
    });
};
