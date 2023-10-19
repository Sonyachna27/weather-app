import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const WeatherData = ( { latitude, longitude }) => {
  const [cityName, setCityName] = useState('');
  const [cityTemp, setCityTemp] = useState('');
  const [cityClouds, setCityClouds] = useState('');
  const [cityIcon, setCityIcon] = useState('');
  
  useEffect(() => {
    async function getWeather() {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=30a75844b229bdaef0cc8c8b22b73d58&lang={ua}`;
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
        });
        const responseResult = await response.json();
        if (response.ok) {
          setCityName(responseResult.name);
          setCityTemp(Math.round(responseResult.main.temp));
          setCityClouds(responseResult.weather[0].main)
          setCityIcon(responseResult.weather[0].icon)
          
        } else {
          console.error('Помилка при виконанні запиту до API');
        }
      } catch (error) {
        console.error('Помилка при виконанні запиту:', error);
      }
    }
    getWeather();
  }, [latitude, longitude]); 
  return (
    <Container className='temp'>
    <Row className="justify-content-md-center">
      <Col className='mb-3' sm={4} > <p>  {cityName}</p></Col>
      <Col className='mb-3' sm={4} >
      <p> Temperature: {cityTemp}°C</p>
      </Col> 
     <Col className='mb-3' sm={4} >
     <p>Weather: {cityClouds}</p>
     </Col>
      <Col className='mb-3' sm={4} >
      <img src={`https://openweathermap.org/img/w/${cityIcon}.png`} alt={cityClouds} />
      </Col>
      </Row>
    </Container>
  );
};

export default WeatherData;