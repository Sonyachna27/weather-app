import React, { useState } from 'react';
import WeatherInput from './WeatherInput';
import WeatherData from './WeatherData';
import WeatherGeoApi from './WeatherGeoApi';

const WeatherResult = () => {
  const [selectedCity, setSelectedCity] = useState('Kyiv');
  

  const [input, setInput] = useState('');

  const handleCityChange = (newCity) => {
    setSelectedCity(newCity);
  };

  const onInputChange = (value) => {
    setInput(value);
  };

  return (
    <div className='container'>
     <WeatherInput onCityChange={handleCityChange}  /> 
      <WeatherGeoApi selectedCity={selectedCity} />
    </div>
  );
};

export default WeatherResult;
