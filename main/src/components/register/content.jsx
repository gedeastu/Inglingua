import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './content.css';
const Content = () => {
  const Navigate = useNavigate();
  return (
    <>
    <main className='flex flex-col items-center gap-5 pt-[7rem] h-96'>
      <button id="login" className='w-96 bg-gradient-to-r  from-[#172A87] to-[#E05E0A] p-0.5 rounded-full overflow-hidden relative'>
      <div id="contentLogin" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-full py-3'>
        <h2>Login</h2>
      </div>
      </button>
      <button id="login" className='w-96 bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-full overflow-hidden relative'>
      <div id="contentLogin" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-full py-3'>
        <h2>Sign Up</h2>
      </div>
      </button>
      <button onClick={()=>Navigate('/')} id='back' className='flex items-center gap-3 border-2 border-white/20 px-5 py-2 rounded-3xl'>
      <svg className='fill-white/60' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V216c0-13.3-10.7-24-24-24H248z"/></svg>
      <h2>Back to Home</h2>
      </button>
    </main>
    </>
  );
};

export default Content;
