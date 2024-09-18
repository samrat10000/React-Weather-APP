import React from "react";
import "./Head.css";
import MyChartInfo from "../MyChartInfo";
import DayTimebox from "../DayTimebox";

const Head = ({
  weatherData,
  icon,
  forecastData,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
}) => {
  return (
    <div className="main-temp-bar">
      <div className="main-info-nav"></div>

      <div className="nav">
        <div className="location">
          <div className="search-location">
            {weatherData?.location || "Location Not found"}
          </div>
          <div className="place">{weatherData?.country || "--"}</div> 
        </div>
        <div className="time">
          {weatherData?.date || "Date"}
          <icon />
        </div>
      </div>

      <div className="main-temp-cont">
        <div className="img-temp">
          <div className="w-img">{icon}</div>
          <div className="temp">
            {weatherData?.temperature ? `${weatherData.temperature}°C` : "--°C"}
          </div>
        </div>

        <div className="current-condition">
          {weatherData?.weatherCondition || "Condition not available"}
        </div>
      </div>

      <hr />

      <hr />

      {/* graph   */}

      <div className="creat-boxx1">
        <div className="boxmain1">
          <MyChartInfo forecastData={forecastData} />
        </div>
      </div>

      <div className="day-forecast">5 Days Forecast</div>
      <div className="wetherdata-scrool">
        {/* da1 */}

        <div className="creat-boxx">
          <div className="boxmain">
            <div className="Todayy">Today</div>

            <div className="img-text">
              <div className="weather-image-box-center">{icon1}</div>
              <div className="wethercondition-box">
                {forecastData?.condition}
              </div>
            </div>

            <div className="tempdata">
              {forecastData?.maxTemp}/{forecastData?.minTemp}
            </div>
          </div>
        </div>

        {/* day2 */}

        <div className="creat-boxx">
          <div className="boxmain">
            <div className="Todayy">{forecastData?.dayName2}</div>

            <div className="img-text">
              <div className="weather-image-box-center">{icon2}</div>
              <div className="wethercondition-box">
                {forecastData?.condition2}
              </div>
            </div>

            <div className="tempdata">
              {forecastData?.maxTemp2}/{forecastData?.minTemp2}
            </div>
          </div>
        </div>

        {/* day3 */}

        <div className="creat-boxx">
          <div className="boxmain">
            <div className="Todayy">{forecastData?.dayName3}</div>

            <div className="img-text">
              <div className="weather-image-box-center">{icon3}</div>
              <div className="wethercondition-box">
                {forecastData?.condition3}
              </div>
            </div>

            <div className="tempdata">
              {forecastData?.maxTemp3}/{forecastData?.minTemp3}
            </div>
          </div>
        </div>

        {/* day4 */}

        <div className="creat-boxx">
          <div className="boxmain">
            <div className="Todayy">{forecastData?.dayName4}</div>

            <div className="img-text">
              <div className="weather-image-box-center">{icon4}</div>
              <div className="wethercondition-box">
                {forecastData?.condition4}
              </div>
            </div>

            <div className="tempdata">
              {forecastData?.maxTemp4}/{forecastData?.minTemp4}
            </div>
          </div>
        </div>

        {/* day5 */}

        <div className="creat-boxx">
          <div className="boxmain">
            <div className="Todayy">{forecastData?.dayName5}</div>

            <div className="img-text">
              <div className="weather-image-box-center">{icon5}</div>
              <div className="wethercondition-box">
                {forecastData?.condition5}
              </div>
            </div>

            <div className="tempdata">
              {forecastData?.maxTemp5}/{forecastData?.minTemp5}
            </div>
          </div>
        </div>

        {/* day6 */}

        <div className="creat-boxx">
          <div className="boxmain">
            <div className="Todayy">{forecastData?.dayName6}</div>

            <div className="img-text">
              <div className="weather-image-box-center">{icon6}</div>
              <div className="wethercondition-box">
                {forecastData?.condition6}
              </div>
            </div>

            <div className="tempdata">
              {forecastData?.maxTemp6}/{forecastData?.minTemp6}
            </div>
          </div>
        </div>
      </div>
      <div className="day-temp-text">Today At</div>

      <div className="day-time-boxes">
        <DayTimebox forecastData={forecastData} />
      </div>

      <hr />

      <div className="bottom-sun-info">
        <div className="text-sidebar">Sunrise & Sunset</div>
        <div className="place-sidebar">
          {weatherData?.location || "Location not available"}
        </div>
      </div>

      <div className="sunrise">
        <div className="sun-box">
          <div className="sunrise-text">
            <div className="sunrise-img">
              <i class="fa-solid fa-mountain-sun"></i>
            </div>
            <div>
              <div className="text-sun sunimg">Sunrise</div>
            </div>
          </div>
          <div className="past-time">
            {weatherData?.sunrise || "Not available"}
          </div>
        </div>
      </div>

      <div className="sunrise">
        <div className="sun-box">
          <div className="sunrise-text">
            <div className="sunrise-img">
              <i className="fa-solid fa-cloud-sun"></i>
            </div>
            <div>
              <div className="text-sun">Sunset</div>
            </div>
          </div>
          <div className="past-time">
            {weatherData?.sunset || "Not available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
