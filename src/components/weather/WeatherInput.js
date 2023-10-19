import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const WeatherInput = ({ onCityChange, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onCityChange(inputValue);
  };

  return (
    <div className='form-container'>
      <Form className='mb-3' onSubmit={handleSearch}>
      <Form.Group>
      <Form.Label htmlFor="searchInput">Search you city:</Form.Label>
        <InputGroup>
        <Form.Control
          type="text"
          id="searchInput"
          value={inputValue || ''} 
          onChange={handleInputChange}
          className='search__form-input'
        />
        <Button variant="dark" type="submit">Search</Button>
        </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default WeatherInput;
