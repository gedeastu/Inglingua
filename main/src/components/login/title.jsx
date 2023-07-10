import React, { useState } from 'react';
import ilustrations from './img/ilustra.svg'
import './title.css';
const Title = () => {
  return (
    <>
    <header className='bg-[#172A87] flex flex-col items-center relative h-60 rounded-br-full rounded-bl-full'>
      {/* <button id="back" className='absolute top-5 left-3'>
      <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </button> */}
      <h1 className='font-black text-4xl text-white uppercase font-TGL mt-10'>Inglingua</h1>
      <img src={ilustrations} alt="" className='w-[26rem] absolute -bottom-[16rem]'/>
    </header>
    </>
  );
};

export default Title;
