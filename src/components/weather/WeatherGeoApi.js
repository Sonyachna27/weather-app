import React, { useEffect, useState } from 'react';
import WeatherData from './WeatherData';

const useWeatherGeoApi = (selectedCity) => {
    const [latitude, setLatitude] = useState(50.4500336);
    const [longitude, setLongitude] = useState(30.5241361);

  useEffect(() => {
    async function getcoordinates() {
      let searchApi = `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=30a75844b229bdaef0cc8c8b22b73d58`;
      try {
        const responseGeo = await fetch(searchApi, {
          method: 'GET',
        });
        const responseGeoResult = await responseGeo.json();
        if (responseGeo.ok) {
          setLatitude(responseGeoResult[0].lat);
          setLongitude(responseGeoResult[0].lon);
        } else {
          console.error('Помилка при виконанні запиту до API');
        }
      } catch (error) {
        console.log('Геокодування не працює, спробуй щось ще)');
      }
    }
    getcoordinates();
  }, [selectedCity]);

  return { latitude, longitude };
};

const WeatherGeoApi = ({ selectedCity }) => {
  const { latitude, longitude } = useWeatherGeoApi(selectedCity);

  return (
    <div>
        <WeatherData latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default WeatherGeoApi;
