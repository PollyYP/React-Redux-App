import React from "react";
import { useSelector } from "react-redux";

function WeatherCard(props) {
  const { name, temp, feels_like, icon, description } = useSelector(
    (state) => state
  );

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var date = new Date();

  return (
    <div className="widget">
      <div className="left-panel panel">
        <div className="date">{`${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`}</div>
        <div className="city">{name}</div>
        <div className="temp">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
            width="60"
          />
          &nbsp;&nbsp;&nbsp;{temp}&deg; C
        </div>
        <div className="foot">
          <p>Feel like: {feels_like}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
