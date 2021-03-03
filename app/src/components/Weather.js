import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/ion/location";

export default function Weather() {
  return (
    <div className="cover">
      <h1>How's the weather today?</h1>
      <form className="flex-form">
        <label for="from">
          <Icon icon={locationIcon} />
        </label>
        <input type="search" placeholder="add location" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
