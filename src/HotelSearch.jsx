import React from 'react';
import Select from 'react-select';

const HotelSearch = ({ hotels, onSelectHotel }) => {
  const options = hotels.map(hotel => ({
    value: hotel.id,
    label: hotel.name,
  }));

  const handleChange = selectedOption => {
    if (selectedOption) {
      const selectedHotel = hotels.find(hotel => hotel.id === selectedOption.value);
      onSelectHotel(selectedHotel);
    }
  };

  // Custom styles to ensure text is always black
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: 'black',  // Ensure the text of options is always black
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',  // Ensure the selected value text is black
    }),
    control: (provided) => ({
      ...provided,
      borderColor: '#ccc',  // Optional: Add border color for the select control
    }),
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Search for a hotel..."
      isClearable
      styles={customStyles}  // Apply custom styles here
    />
  );
};

export default HotelSearch;
