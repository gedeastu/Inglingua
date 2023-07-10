import React, { useState } from 'react';
import ilustrations from './img/ilustra.svg'
import './content.css';
const Content = () => {
  return (
    <>
    <main className='mt-[19rem] flex flex-col gap-3'>
      <div id="titleLogin" className='text-center'>
        <h1 className='text-white font-bold text-4xl'>Log in</h1>
      </div>
      <form action="" className='flex flex-col items-center gap-3'>
        <input type="text" className='w-[27rem] rounded-xl bg-transparent border-2' placeholder='Username'/>
        <input type="password" className='w-[27rem] rounded-xl bg-transparent border-2 ' placeholder='Password'/>
      </form>
    </main>
    </>
  );
};

export default Content;
