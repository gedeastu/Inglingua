import React, { useState } from 'react';
import './title.css';
const Hero = () => {
  return (
    <>
    <div id="hero" className='bg-gradient-to-r from-transparent to-[#E05E0A] h-48 w-80 mx-auto mt-20 py-1 pr-1'>
      <div id="fillHero" className='h-full w-full bg-gradient-to-r from-black to-[#161515] flex flex-col justify-center gap-3'>
        <h2 id='word1' className='uppercase font-bold text-[#E05E0A] text-xl'>Learn as you wish</h2>
        <div id="word2">
          <h1 className='text-4xl text-white font-black'>SKILL UP</h1>
          <p className='text-white'>Belajar Bahasa Inggris sesuai 
          <br />
          keinginanmu!</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
