import React from "react";
import { useSelector } from "react-redux";

function WeatherCard(props) {
  const { name, temp } = useSelector((state) => state);

  return (
    <div className="widget">
      <div className="left-panel panel">
        <div className="date">{new Date().getFullYear()}</div>
        <div className="city">{name.name}</div>
        <div className="temp">
          <img
            src="https://s5.postimg.cc/yzcm7htyb/image.png"
            alt=""
            width="60"
          />
          {temp.main.temp}&deg;
        </div>
      </div>
      <div className="right-panel panel">
        <img
          src="https://s5.postimg.cc/lifnombwz/mumbai1.png"
          alt=""
          width="160"
        />
      </div>
    </div>
  );
}

export default WeatherCard;
