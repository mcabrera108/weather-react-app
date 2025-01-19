import style from "../../style_modules/layout.module.css";
import { WiDaySunny } from "weather-icons-react";
import { useMediaQuery } from "react-responsive";
function Header() {
  const isMobileDevice = useMediaQuery({
    query: `(max-width:1024px)`,
  });
  return (
    <header className={style.headerContainer}>
      <div className={style.logoContainer}>
        <WiDaySunny
          size={isMobileDevice ? 40 : 50}
          color="white"
          title={"sun"}
        />
        <div className={style.logoTitle}>
          <span>Weather App</span>
        </div>
      </div>
    </header>
  );
}
export default Header;
