import style from "../style_modules/layout.module.css";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DataModule from "../components/ui/DataModule";

function Home() {
  const [weather, setWeather] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;

  const isMobileDevice = useMediaQuery({
    query: `(max-width:1024px)`,
  });

  const [weatherInput, setWeatherInput] = useState("Seattle");

  async function getWeather(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${weatherInput}&days=3`
      );
      const actualData = await response.json();

      console.log(actualData);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP Error: The status is ${response.data}`
        );
      }
      setWeather(actualData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.homeContainer}>
        <div className={style.homeWrapper}>
          <div className={style.searchContainer}>
            <form onSubmit={getWeather}>
              <input
                type="text"
                onChange={(e) => {
                  setWeatherInput(e.target.value);
                }}
                size={isMobileDevice ? 20 : 50}
                className={style.userInput}
                placeholder="Search for a location..."
              />
              <button
                type="submit"
                disabled={loading}
                className={style.userInputBtn}
              >
                {loading ? (
                  "Loading..."
                ) : (
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                    color="white"
                  />
                )}
              </button>
            </form>
          </div>
          <div className={style.areaContainer}>
            {error && <p>Unable to fetch details for this submission</p>}
            {weather && (
              <p>
                {weather.location.name}
                {weather.location.region ? `, ${weather.location.region}` : ""}
              </p>
            )}
          </div>
          <div className={style.tempContainer}>
            {weather && (
              <p
                onClick={() => {
                  setIsFahrenheit(!isFahrenheit);
                }}
              >
                {isFahrenheit ? (
                  <span>{weather.current.temp_f} &deg;F</span>
                ) : (
                  <span>{weather.current.temp_c} &deg;C</span>
                )}
              </p>
            )}
          </div>
          <div className={style.feelsLikeContainer}>
            {weather && (
              <span>Click the temp above to toggle from &deg;F to &deg;C</span>
            )}
          </div>
          <div className={style.weatherContainer}>
            {weather && (
              <img
                src={weather.current.condition.icon}
                className={style.weatherIcon}
              />
            )}
            {weather && <p>{weather.current.condition.text}</p>}
          </div>
          <div className={style.feelsLikeContainer}>
            {/*weather && <img src={weather.current.condition.icon} />*/}
            {weather && (
              <p>
                Feels Like:{" "}
                {isFahrenheit
                  ? weather.current.feelslike_f
                  : weather.current.feelslike_c}
              </p>
            )}
          </div>
          <div className={style.allModContainer}>
            {weather && (
              <DataModule weather={weather} isFahrenheit={isFahrenheit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
