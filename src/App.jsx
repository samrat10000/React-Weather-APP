import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import ResponsiveBoxes from "./components/ResponsiveBoxes";
import MyChart from "./components/MyChart";
import "./App.css";
import DayTimebox from "./DayTimebox";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };

  const allIcons = {
    "01d": <i className="fa-solid fa-sun w-img-color"></i>,
    "01n": <i className="fa-solid fa-moon w-img-color"></i>,
    "02d": <i className="fa-solid fa-cloud-sun w-img-color"></i>,
    "02n": <i className="fa-solid fa-cloud-moon w-img-color"></i>,
    "03d": <i className="fa-solid fa-cloud w-img-color"></i>,
    "03n": <i className="fa-solid fa-cloud w-img-color"></i>,
    "04d": <i className="fa-solid fa-cloud w-img-color"></i>,
    "04n": <i className="fa-solid fa-cloud w-img-color"></i>,
    "09d": <i className="fa-solid fa-cloud-showers-heavy w-img-color"></i>,
    "09n": <i className="fa-solid fa-cloud-showers-heavy w-img-color"></i>,
    "10d": <i className="fa-solid fa-cloud-rain w-img-color"></i>,
    "10n": <i className="fa-solid fa-cloud-rain w-img-color"></i>,
    "11d": <i className="fa-solid fa-cloud-bolt w-img-color"></i>,
    "11n": <i className="fa-solid fa-cloud-bolt w-img-color"></i>,
    "13d": <i className="fa-solid fa-snowflake w-img-color"></i>,
    "13n": <i className="fa-solid fa-snowflake w-img-color"></i>,
    "50d": <i className="fa-solid fa-water w-img-color"></i>,
    "50n": <i className="fa-solid fa-water w-img-color"></i>,
  };
  const allIcons2 = {
    "01d": <i className="fa-solid fa-sun w2-img-color"></i>,
    "01n": <i className="fa-solid fa-moon w2-img-color"></i>,
    "02d": <i className="fa-solid fa-cloud-sun w2-img-color"></i>,
    "02n": <i className="fa-solid fa-cloud-moon w2-img-color"></i>,
    "03d": <i className="fa-solid fa-cloud w2-img-color"></i>,
    "03n": <i className="fa-solid fa-cloud w2-img-color"></i>,
    "04d": <i className="fa-solid fa-cloud w2-img-color"></i>,
    "04n": <i className="fa-solid fa-cloud w2-img-color"></i>,
    "09d": <i className="fa-solid fa-cloud-showers-heavy w2-img-color"></i>,
    "09n": <i className="fa-solid fa-cloud-showers-heavy w2-img-color"></i>,
    "10d": <i className="fa-solid fa-cloud-rain w2-img-color"></i>,
    "10n": <i className="fa-solid fa-cloud-rain w2-img-color"></i>,
    "11d": <i className="fa-solid fa-cloud-bolt w2-img-color"></i>,
    "11n": <i className="fa-solid fa-cloud-bolt w2-img-color"></i>,
    "13d": <i className="fa-solid fa-snowflake w2-img-color"></i>,
    "13n": <i className="fa-solid fa-snowflake w2-img-color"></i>,
    "50d": <i className="fa-solid fa-water w2-img-color"></i>,
    "50n": <i className="fa-solid fa-water w2-img-color"></i>,
  };

  const convertToIST = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleTimeString("en-IN", options);
  };

  const formatDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-IN", options);
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("API response data:", data);

      const weatherData = {
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        country: data.sys.country,
        sunrise: convertToIST(data.sys.sunrise),
        sunset: convertToIST(data.sys.sunset),
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        weatherCondition: data.weather[0].main,
        iconCode: data.weather[0].icon,
        Time: data.timezone,
        Visibility: metersToKilometers(data.visibility),
      };

      setWeatherData(weatherData);
      fetchFiveDayForecast(data.coord.lat, data.coord.lon);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };
  // default location
  // useEffect(() => {
  //   search("Dehradun");
  // }, []);

  function metersToKilometers(meters) {
    return meters / 1000;
  }

  const weatherByCoords = async (latitude, longitude) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_APP_ID
      }&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("API response data:", data);

      setWeatherData({
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_minpn,
        date: formatDate(data.dt),
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        country: data.sys.country,
        sunrise: convertToIST(data.sys.sunrise),
        sunset: convertToIST(data.sys.sunset),
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        weatherCondition: data.weather[0].main,
        iconCode: data.weather[0].icon,
        Visibility: metersToKilometers(data.visibility),
      });

      fetchFiveDayForecast(latitude, longitude);
    } catch (error) {
      console.error("Error fetching live weather data:", error);
      setWeatherData(null);
    }
  };

  const getLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          weatherByCoords(latitude, longitude);
        },
        (error) => {
          alert("Unable to fetch location.");
        }
      );
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };
  const getDayNameFromUnix = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const options = { weekday: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (dateTime) => {
    let time = dateTime.split(" ")[1].slice(0, 5);
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
  };

  const fetchFiveDayForecast = async (latitude, longitude) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_APP_ID
      }&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("5-day forecast data:", data);

      setForecastData({
        date: formatDate(data.list[0].dt),
        maxTemp: Math.floor(data.list[0].main.temp_max),
        minTemp: Math.floor(data.list[0].main.temp_min),
        iconCode1: data.list[0].weather[0].icon,
        condition: data.list[0].weather[0].main,
        temperature: Math.floor(data.list[0].main.temp),

        date2: formatDate(data.list[7].dt),
        dayName2: getDayNameFromUnix(data.list[7].dt),
        maxTemp2: Math.floor(data.list[7].main.temp_max),
        minTemp2: Math.floor(data.list[7].main.temp_min),
        iconCode2: data.list[7].weather[0].icon,
        condition2: data.list[7].weather[0].main,
        temperature2: Math.floor(data.list[7].main.temp),

        date3: formatDate(data.list[15].dt),
        dayName3: getDayNameFromUnix(data.list[15].dt),
        maxTemp3: Math.floor(data.list[15].main.temp_max),
        minTemp3: Math.floor(data.list[15].main.temp_min),
        iconCode3: data.list[15].weather[0].icon,
        condition3: data.list[15].weather[0].main,
        temperature3: Math.floor(data.list[15].main.temp),

        date4: formatDate(data.list[23].dt),
        dayName4: getDayNameFromUnix(data.list[23].dt),
        maxTemp4: Math.floor(data.list[23].main.temp_max),
        minTemp4: Math.floor(data.list[23].main.temp_min),
        iconCode4: data.list[23].weather[0].icon,
        condition4: data.list[23].weather[0].main,
        temperature4: Math.floor(data.list[23].main.temp),

        date5: formatDate(data.list[26].dt),
        dayName5: getDayNameFromUnix(data.list[26].dt),
        maxTemp5: Math.floor(data.list[26].main.temp_max),
        minTemp5: Math.floor(data.list[26].main.temp_min),
        iconCode5: data.list[26].weather[0].icon,
        condition5: data.list[26].weather[0].main,
        temperature5: Math.floor(data.list[26].main.temp),

        date6: formatDate(data.list[34].dt),
        dayName6: getDayNameFromUnix(data.list[34].dt),
        maxTemp6: Math.floor(data.list[34].main.temp_max),
        minTemp6: Math.floor(data.list[34].main.temp_min),
        iconCode6: data.list[34].weather[0].icon,
        condition6: data.list[34].weather[0].main,
        temperature6: Math.floor(data.list[34].main.temp),

        //api fetch for todays data

        CurrentTime1: formatTime(data.list[0].dt_txt),
        CurrentTime2: formatTime(data.list[1].dt_txt),
        CurrentTime3: formatTime(data.list[2].dt_txt),
        CurrentTime4: formatTime(data.list[3].dt_txt),
        CurrentTime5: formatTime(data.list[4].dt_txt),
        CurrentTime6: formatTime(data.list[6].dt_txt),
        CurrentTime7: formatTime(data.list[7].dt_txt),
        CurrentTime8: formatTime(data.list[8].dt_txt),
        CurrentTime9: formatTime(data.list[9].dt_txt),
        CurrentTime10: formatTime(data.list[10].dt_txt),

        CurrentTemperature1: Math.floor(data.list[0].main.temp),
        CurrentTemperature2: Math.floor(data.list[2].main.temp),
        CurrentTemperature3: Math.floor(data.list[3].main.temp),
        CurrentTemperature4: Math.floor(data.list[4].main.temp),
        CurrentTemperature5: Math.floor(data.list[5].main.temp),
        CurrentTemperature6: Math.floor(data.list[6].main.temp),
        CurrentTemperature7: Math.floor(data.list[7].main.temp),
        CurrentTemperature8: Math.floor(data.list[8].main.temp),
        CurrentTemperature9: Math.floor(data.list[9].main.temp),
        CurrentTemperature10: Math.floor(data.list[10].main.temp),
        CurrentTemperature11: Math.floor(data.list[11].main.temp),

        iconCodeday1: data.list[0].weather[0].icon,

        Daycondition1: data.list[0].weather[0].description,
        // Daycondition3: data.list[2].weather[2].description ,
        // Daycondition4: data.list[3].weather[3].description ,
        // Daycondition5: data.list[4].weather[4].description ,
        // daycondition6: data.list[5].weather[5].description ,
        // daycondition7: data.list[6].weather[6].description ,
        // daycondition8: data.list[7].weather[7].description ,
        // daycondition9: data.list[8].weather[8].description ,
        // daycondition10: data.list[9].weather[9].description ,
        // daycondition11: data.list[10].weather[10].description ,
        // daycondition12: data.list[11].weather[11].description ,
        // daycondition13: data.list[12].weather[12].description ,
        // daycondition14: data.list[13].weather[13].description ,
        // daycondition15: data.list[14].weather[14].description ,
        // daycondition16: data.list[15].weather[15].description ,
        // daycondition17: data.list[16].weather[16].description ,
        // daycondition18: data.list[17].weather[17].description ,
        // daycondition18: data.list[18].weather[18].description ,

        Wspeed: data.list[1].wind.speed,
        Ppressure: data.list[1].main.pressure,
      });
    } catch (error) {
      console.error("Error fetching 5-day forecast:", error);
      setForecastData(null);
    }
  };

  return (
    <div className="app">
      <div className="nav-cont-display">
        <Navbar search={search} getLiveLocation={getLiveLocation} />
      </div>
      <div className="parent-box">
        <div className="box2-parent">
          <div className="nav-cont">
            <Navbar
              search={search}
              getLiveLocation={getLiveLocation}
              weatherData={weatherData}
              forecastData={forecastData}
            />
          </div>
          <div className="box1">
            <div className="text-today">Today Overview</div>

            <ResponsiveBoxes
              weatherData={weatherData}
              forecastData={forecastData}
            />

            <MyChart forecastData={forecastData} />
            <div className="day-forecast-text">24-hour Forecast</div>

            <DayTimebox
              forecastData={forecastData}
              dayTimeicon={
                allIcons[forecastData?.iconCodeday1] || (
                  <i className="fa-solid fa-sun"></i>
                )
              }
            />

            <Footer />
          </div>
        </div>
        <div className="box2">
          <Head
            weatherData={weatherData}
            forecastData={forecastData}
            icon1={
              allIcons2[forecastData?.iconCode1] || (
                <i className="fa-solid fa-sun"></i>
              )
            }
            icon2={
              allIcons2[forecastData?.iconCode2] || (
                <i className="fa-solid fa-sun"></i>
              )
            }
            icon3={
              allIcons2[forecastData?.iconCode3] || (
                <i className="fa-solid fa-sun"></i>
              )
            }
            icon4={
              allIcons2[forecastData?.iconCode4] || (
                <i className="fa-solid fa-sun"></i>
              )
            }
            icon5={
              allIcons2[forecastData?.iconCode5] || (
                <i className="fa-solid fa-sun"></i>
              )
            }
            icon6={
              allIcons2[forecastData?.iconCode6] || (
                <i className="fa-solid fa-sun"></i>
              )
            }
            icon={
              allIcons[weatherData?.iconCode] || (
                <i className="fa-solid fa-sun w-img-color"></i>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
