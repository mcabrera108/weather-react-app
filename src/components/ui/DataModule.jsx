import style from "../../style_modules/layout.module.css";
import PropTypes from "prop-types";
function DataModule({ weather, isFahrenheit }) {
  return (
    <div className={style.moduleContainer}>
      <div className={style.subModuleContainer}>
        <p>
          Dewpoint{isFahrenheit ? <span> &deg;F</span> : <span> &deg;C</span>}:{" "}
          {isFahrenheit
            ? weather.current.dewpoint_f
            : weather.current.dewpoint_c}
        </p>
      </div>
      <div className={style.subModuleContainer}>
        <p>
          Wind Speed {isFahrenheit ? <span>mph</span> : <span>kmp</span>}:{" "}
          {isFahrenheit ? weather.current.wind_mph : weather.current.wind_kph}
        </p>
      </div>
      <div className={style.subModuleContainer}>
        <p>
          Gust Speed {isFahrenheit ? <span>mph</span> : <span>kmp</span>}:{" "}
          {isFahrenheit ? weather.current.gust_mph : weather.current.gust_kph}
        </p>
      </div>
      <div className={style.subModuleContainer}>
        <p>
          Heat Index{" "}
          {isFahrenheit ? <span> &deg;F</span> : <span> &deg;C</span>}:{" "}
          {isFahrenheit
            ? weather.current.heatindex_f
            : weather.current.heatindex_c}
        </p>
      </div>
      <div className={style.subModuleContainer}>
        <p>
          Precipitation {isFahrenheit ? <span> (in)</span> : <span> (mm)</span>}
          :{" "}
          {isFahrenheit ? weather.current.precip_in : weather.current.precip_mm}
        </p>
      </div>
      <div className={style.subModuleContainer}>
        <p>
          Pressure {isFahrenheit ? <span> (in)</span> : <span> (mb)</span>}:{" "}
          {isFahrenheit
            ? weather.current.pressure_in
            : weather.current.pressure_mb}
        </p>
      </div>
    </div>
  );
}
DataModule.propTypes = {
  weather: PropTypes.object,
  isFahrenheit: PropTypes.bool,
};
export default DataModule;
