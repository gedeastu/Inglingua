import './tipeClass.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function TypeClass(){
    const navigation = useNavigate()
    const [showElement,setShowElement] = useState();
    const handleChange = (event) => {
        setShowElement(event.target.value);
    };
    // const [showForOffline,setShowForOffline] = useState(false);
    // const handleForOffline = () => {
    //     setShowForOffline(!showForOffline);
    // };    
    return(
        <>
        <div id='TypeClassRadio' className='relative w-[28rem] flex flex-col gap-y-2 mx-auto items-center text-white'>
        <h1 className='font-semibold text-white mr-auto'>Tipe Kelas</h1>
        <div className='flex items-center w-full gap-0.5 p-0.5 font-semibold bg-gradient-to-r from-[#172A87] to-[#E05E0A] rounded-2xl overflow-hidden'>
        <input id='online' type="radio" value="showOnline" name='radio' className='hidden' checked={showElement === 'showOnline'} onClick={handleChange}/>
        <label htmlFor='online' className='text-white cursor-pointer w-full text-center bg-black px-2 py-4 rounded-tl-2xl rounded-bl-2xl '>
            Online
        </label>
        <input id='offline' type="radio" value="showOffline" name='radio' className='hidden' checked={showElement === 'showOffline'} onClick={handleChange}/>
        <label htmlFor='offline' className='text-white cursor-pointer w-full text-center bg-black px-2 py-4 rounded-tr-2xl rounded-br-2xl '>
            Offline
        </label>
        </div>
        {showElement === 'showOnline' && (
           <button id="started" className='w-[28rem] transition-all mt-3 duration-300 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-2xl overflow-hidden relative'>
           <div id="started" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-2xl py-3'>
             <h2>Selanjutnya</h2>
           </div>
           </button>
        )}
        {showElement === 'showOffline' && (
           <button id="started" className='w-[28rem] transition-all mt-3 duration-300 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-2xl overflow-hidden relative'>
           <div id="started" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-2xl py-3'>
             <h2>Selanjutnya</h2>
           </div>
           </button>
        )}
        {/* {showForOffline && (
           <button onClick={{}} id="started" className='w-[28rem] transition-all duration-300 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-2xl overflow-hidden relative'>
           <div id="started" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-2xl py-3'>
             <h2>Selanjutnya</h2>
           </div>
           </button>
        )} */}
        </div>
        </>
    )
}