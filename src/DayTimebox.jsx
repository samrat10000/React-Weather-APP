import React from "react";
import "./DayTimebox.css";

const DayTimebox = ({ forecastData, icon1, iconCodeday1 }) => {
  return (
    <div className="new">
      <div className="text-forecast">24-hour forecast</div>

      <div className="forecast-container">
        {/* Box 1 */}
        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime1}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.Daycondition1}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature1}°C
            </div>
          </div>
        </div>

        {/* Repeat for Box 2 to 6 */}
        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime2}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature2}°C
            </div>
          </div>
        </div>

        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime3}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature3}°C
            </div>
          </div>
        </div>

        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime4}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature4}°C
            </div>
          </div>
        </div>

        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime5}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature5}°C
            </div>
          </div>
        </div>

        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime6}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature6}°C
            </div>
          </div>
        </div>

        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime7}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature7}°C
            </div>
          </div>
        </div>

        <div className="forecast-box">
          <div className="forecast-main">
            <div className="forecast-today">
              At {forecastData?.CurrentTime8}
            </div>
            <div className="forecast-img-text">
              <div className="forecast-icon-center">{icon1}</div>
              <div className="forecast-condition">
                {forecastData?.condition}
              </div>
            </div>
            <div className="forecast-temp">
              {forecastData?.CurrentTemperature8}°C
            </div>
          </div>
        </div>

        {/* <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime9}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature9}°C</div>
        </div>
      </div>



      
      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime10}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature10}°C</div>
        </div>
      </div>


      
      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime11}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature12}°C</div>
        </div>
      </div>


      
      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime13}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature13}°C</div>
        </div>
      </div>


      
      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime14}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature14}°C</div>
        </div>
      </div>

      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime15}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature15}°C</div>
        </div>
      </div>



      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime16}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature16}°C</div>
        </div>
      </div>


      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime17}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature17}°C</div>
        </div>
      </div>


      <div className="forecast-box">
        <div className="forecast-main">
          <div className="forecast-today">At {forecastData?.CurrentTime18}</div>
          <div className="forecast-img-text">
            <div className="forecast-icon-center">{icon1}</div>
            <div className="forecast-condition">{forecastData?.condition}</div>
          </div>
          <div className="forecast-temp">{forecastData?.CurrentTemperature18}°C</div>
        </div>
      </div>
 */}
      </div>
    </div>
  );
};

export default DayTimebox;
