import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getLondonData,
  getMilanData,
  getParisData,
  getMoscowData,
} from "../redux/actions/action";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/ion/location";

export default function Weather(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    getLondonData(dispatch);
    getParisData(dispatch);
    getMilanData(dispatch);
    getMoscowData(dispatch);
  });

  return (
    <nav className="slidemenu">
      <input
        onClick={() => getLondonData(dispatch)}
        type="radio"
        name="slideItem"
        id="slide-item-1"
        className="slide-toggle"
        checked
      />
      <label for="slide-item-1">
        <p className="icon">
          <Icon icon={locationIcon} />
        </p>
        <span>London</span>
      </label>

      <input
        onClick={() => getParisData(dispatch)}
        type="radio"
        name="slideItem"
        id="slide-item-2"
        className="slide-toggle"
      />
      <label for="slide-item-2">
        <p className="icon">
          <Icon icon={locationIcon} />
        </p>
        <span>Paris</span>
      </label>

      <input
        onClick={() => getMilanData(dispatch)}
        type="radio"
        name="slideItem"
        id="slide-item-3"
        className="slide-toggle"
      />
      <label for="slide-item-3">
        <p className="icon">
          <Icon icon={locationIcon} />
        </p>
        <span>Milan</span>
      </label>

      <input
        onClick={() => getMoscowData(dispatch)}
        type="radio"
        name="slideItem"
        id="slide-item-4"
        className="slide-toggle"
      />
      <label for="slide-item-4">
        <p className="icon">
          <Icon icon={locationIcon} />
        </p>
        <span>Moscow</span>
      </label>
    </nav>
  );
}
