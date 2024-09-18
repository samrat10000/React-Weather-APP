import React, { useRef } from "react";
import "./Navbar.css";
const Navbar = ({ search, getLiveLocation, weatherData, forecastData }) => {
  const inputref = useRef();

  return (
    <div className="Navbar">
      <div className="show-date">
        <div class="container">
          <div class="cloud front">
            <span class="left-front"></span>
            <span class="right-front"></span>
          </div>
          <span class="sun sunshine"></span>
          <span class="sun"></span>
          <div class="cloud back">
            <span class="left-back"></span>
            <span class="right-back"></span>
          </div>
        </div>
      </div>

      <div className="search-bar">
        <input
          className="search-input"
          ref={inputref}
          type="text"
          placeholder="Search..."
        />
        <button
          className="search-button"
          onClick={() => {
            console.log("Search button clicked");
            search(inputref.current.value);
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="live-location-btn">
        <button
          className="current-location"
          onClick={() => {
            console.log("Get live location button clicked");
            getLiveLocation();
          }}
        >
          <i class="fa-solid fa-location-crosshairs"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
