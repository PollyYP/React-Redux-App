import axios from "axios";

export const getLondonData = (dispatch) => {
  dispatch({ type: "FETCHING_DATA_START" });
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=london&APPID=8c7f85534d8b5e62ac8a933e384edafe"
    )
    .then((res) => {
      dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCHING_DATA_FAILURE", payload: err });
    });
};

export const getParisData = (dispatch) => {
  dispatch({ type: "FETCHING_DATA_START" });
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=paris&APPID=8c7f85534d8b5e62ac8a933e384edafe"
    )
    .then((res) => {
      dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCHING_DATA_FAILURE", payload: err });
    });
};

export const getMilanData = (dispatch) => {
  dispatch({ type: "FETCHING_DATA_START" });
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=milan&APPID=8c7f85534d8b5e62ac8a933e384edafe"
    )
    .then((res) => {
      dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCHING_DATA_FAILURE", payload: err });
    });
};

export const getMoscowData = (dispatch) => {
  dispatch({ type: "FETCHING_DATA_START" });
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=moscow&APPID=8c7f85534d8b5e62ac8a933e384edafe"
    )
    .then((res) => {
      dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: "FETCHING_DATA_FAILURE", payload: err });
    });
};
