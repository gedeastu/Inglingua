import './startedCourse.css';
import React, { useState } from 'react';
const Navbar = () => {
  return (
    <>
      <div className='flex justify-between pt-7'>
      <button id="myClass" className='w-[8rem] h-28 bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-xl  overflow-hidden relative'>
          <div id="myClass" className='w-full h-full flex flex-col justify-center bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-xl py-3'>
            <h2>Kelas Saya</h2>
          </div>
      </button>
      <button id="teacherSign" className='w-[8rem] h-28 bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-xl overflow-hidden relative'>
          <div id="teacherSign" className='w-full h-full flex flex-col justify-center bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-xl py-3'>
            <h2>Daftar Guru</h2>
          </div>
      </button>
      <button id="chat" className='w-[8rem] h-28 bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-xl overflow-hidden relative'>
          <div id="chat" className='w-full h-full flex flex-col justify-center bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-xl py-3'>
            <h2>Chat</h2>
          </div>
      </button>
      </div>
    </>
  );
};

export default Navbar;

