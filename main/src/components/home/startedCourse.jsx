import './startedCourse.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const StartedCourse = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className='bg-gradient-to-r from-[#172A87] to-t w-[25rem] h-60 rounded-xl mx-auto p-0.5'>
        <div className='w-full h-full bg-black rounded-xl flex flex-col justify-center relative overflow-hidden'>
          <button onClick={()=>Navigate('/CourseSection')} id="started" className='w-52 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-full ml-10 overflow-hidden relative'>
          <div id="started" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-full py-3'>
            <h2>Mulai Kursus</h2>
          </div>
          </button>
          <div id="circle" className='absolute -right-7 -top-10 bg-gradient-to-br from-[#172A87] to-black h-40 w-40 rounded-full'>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartedCourse;

