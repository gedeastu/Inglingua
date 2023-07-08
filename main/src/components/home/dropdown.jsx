import React, { useState } from 'react';

const Dropdown = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionSelect = (event) => {
//     setSelectedOption(event.target.value);
//   };

  return (
    <div>
      {/* <select value={selectedOption} onChange={handleOptionSelect} className='text-white bg-transparent border-none focus:outline-none focus:border-none focus:ring-0'>
        <option value="" selected disabled>Select an option</option>
        <option value="option1" >Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select> */}
      <select  className='text-white bg-transparent border-opacity-5 border-[1] rounded-xl w-[10rem] text-center font-bold focus:outline-none focus:border-gray-500 focus:ring-0'>
        <option value="" selected disabled>Choose Level</option>
        <option value="option1" >Beginner</option>
        <option value="option2">Intermediate</option>
        <option value="option3">Advanced</option>
      </select>
      {/* <p className='text-white'>Selected option: {selectedOption}</p> */}
    </div>
  );
};

export default Dropdown;
