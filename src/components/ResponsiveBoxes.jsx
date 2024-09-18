import React, { useState, useEffect } from "react";
import "./ResponsiveBoxes.css";

function ResponsiveBoxes({ weatherData, forecastData }) {
  function calculateChanceOfRain(humidity) {
    if (humidity >= 80) {
      return 90;
    } else if (humidity >= 60) {
      return 60;
    } else if (humidity >= 40) {
      return 30;
    } else {
      return 10;
    }
  }

  const [visibility, setVisibility] = useState(null);

  function getVisibilityDescription(visibility) {
    if (visibility >= 10) {
      return "Excellent Visibility";
    } else if (visibility >= 5) {
      return "Good Visibility";
    } else if (visibility >= 2) {
      return "Moderate Visibility";
    } else if (visibility >= 1) {
      return "Poor Visibility";
    } else {
      return "Very Poor Visibility";
    }
  }

  useEffect(() => {
    if (weatherData?.Visibility) {
      setVisibility(weatherData.Visibility);
    }
  }, [weatherData]);

  const windSpeedThreshold = 30;
  const pressureThreshold = 1013;
  const humidityThreshold = 60;

  return (
    <div className="flex-container">
      <div className="column">
        <div className="box">
          <div className="content">
            <div className="img-logo">
              <i className="fa-solid fa-wind"></i>
            </div>
            <div className="img-info">
              <div className="text1">Wind Speed</div>
              <div className="text-info">
                {weatherData?.windspeed
                  ? `${weatherData.windspeed} Km/h`
                  : "-------"}
              </div>
            </div>
            <div
              className="arrow"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className={`fa-solid fa-caret-down ${
                  weatherData?.windspeed < windSpeedThreshold
                    ? "rotate-down red-arrow"
                    : "rotate-up"
                }`}
              ></i>
              <div className="chance-of-rain" style={{ marginLeft: "10px" }}>
                {forecastData?.Wspeed}Km/h
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <div className="img-logo">
              <i className="fa-solid fa-cloud-rain"></i>
            </div>
            <div className="img-info">
              <div className="text1">Humidity</div>
              <div className="text-info">
                {weatherData?.humidity ? `${weatherData.humidity}%` : "------"}
              </div>
            </div>
            <div
              className="arrow"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className={`fa-solid fa-caret-down ${
                  weatherData?.humidity > humidityThreshold
                    ? "rotate-up green-arrow"
                    : ""
                }`}
              ></i>
              <div className="chance-of-rain" style={{ marginLeft: "10px" }}>
                {`Chance of Rain: ${
                  weatherData?.humidity
                    ? calculateChanceOfRain(weatherData.humidity)
                    : "------"
                }%`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="box">
          <div className="content">
            <div className="img-logo">
              <i className="fa-solid fa-water"></i>
            </div>
            <div className="img-info">
              <div className="text1">Pressure</div>
              <div className="text-info">
                {weatherData?.pressure
                  ? `${weatherData.pressure} hPa`
                  : "-------"}
              </div>
            </div>
            <div
              className="arrow"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className={`fa-solid fa-caret-down ${
                  weatherData?.pressure < pressureThreshold
                    ? "rotate-down red-arrow"
                    : "rotate-up"
                }`}
              ></i>
              <div className="chance-of-rain" style={{ marginLeft: "10px" }}>
                {forecastData?.Ppressure}hpa
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <div className="img-logo">
              <i className="fa-solid fa-eye"></i>
            </div>
            <div className="img-info">
              <div className="text1">Visibility</div>
              <div className="text-info">
                {weatherData?.Visibility
                  ? `${weatherData.Visibility} Km`
                  : "-------"}
              </div>
            </div>
            <div
              className="arrow"
              style={{ display: "flex", alignItems: "center" }}
            >
              <i
                className={`fa-solid fa-caret-down ${
                  visibility && visibility < 5
                    ? "rotate-down red-arrow"
                    : "rotate-up green-arrow"
                }`}
              />
              <div className="chance-of-rain" style={{ marginLeft: "10px" }}>
                {visibility ? getVisibilityDescription(visibility) : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveBoxes;
