import axios from "axios";

export const getWeatherData = async (latitude, longitude, setWeatherInfo) => {
  const wheatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ff35f8965b5aa598cd3e3e536823bbad&units=metric`;

  try {
    const getData = await axios.get(wheatherAPI);
    console.log(getData);
    const valuesFromAPI = {
      location: getData.data.name,
      temp: getData.data.main.temp.toFixed(2),
      icon: getData.data.weather[0].icon,
    };
    setWeatherInfo(valuesFromAPI);
  } catch (error) {
    console.log(error);
  }
};
