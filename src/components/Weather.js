import { getWeatherData } from "../services/";
import { useEffect, useState } from "react";

export const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    location: "",
    temp: "",
    icon: "",
  });
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    const { latitude, longitude } = location;
    if (latitude !== "" && longitude !== "")
      getWeatherData(latitude, longitude, setWeatherInfo);
  }, [location]);

  return (
    <div>
      {weatherInfo.location !== "" &&
        weatherInfo.icon !== "" &&
        weatherInfo.temp !== "" && (
          <>
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
              width="60px"
              height="60px"
              alt={weatherInfo.icon}
            />
            <div className="temp text para-md">{weatherInfo.temp}°C</div>
            <div className="temp-location text">{weatherInfo.location}</div>
          </>
        )}
    </div>
  );
};
