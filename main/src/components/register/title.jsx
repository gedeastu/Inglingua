import React, { useState } from 'react';
import './title.css';
const Title = () => {
  return (
    <>
    <header className='bg-[#172A87] flex justify-center relative h-64 rounded-br-full rounded-bl-full'>
      {/* <button id="back" className='absolute top-5 left-3'>
      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </button> */}
      <h1 className='font-black text-4xl text-white uppercase font-TGL mt-20'>I n g l i n g u a</h1>
    </header>
    </>
  );
};

export default Title;
