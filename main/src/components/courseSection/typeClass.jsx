import './typeClass.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function TypeClass(){
    const navigation = useNavigate()
    const [showElement,setShowElement] = useState('');
    const handleChange = (event) => {
        setShowElement(event.target.value);
    };
    // const [showForOffline,setShowForOffline] = useState(false);
    // const handleForOffline = () => {
    //     setShowForOffline(!showForOffline);
    // };    
    return(
        <>
        <div id='TypeClassRadio' className='relative z-50 flex flex-col items-center text-white'>
        <div className='flex items-center gap-0.5 p-0.5 font-semibold bg-gradient-to-r from-[#172A87] to-[#E05E0A] rounded-xl overflow-hidden'>
        <input id='online' type="radio" value="showOnline" name='radio' className='hidden' checked={showElement === 'showOnline'} onClick={handleChange}/>
        <label htmlFor='online' className='text-white cursor-pointer bg-black p-2 rounded-tl-xl rounded-bl-xl '>
            Online
        </label>
        <input id='offline' type="radio" value="showOffline" name='radio' className='hidden' checked={showElement === 'showOffline'} onClick={handleChange}/>
        <label htmlFor='offline' className='text-white cursor-pointer bg-black p-2 rounded-tr-xl rounded-br-xl '>
            Offline
        </label>
        </div>
        <div>Hello world</div>
        {showElement === 'showOnline' && (
           <button id="started" className='w-[28rem] transition-all duration-300 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-2xl overflow-hidden relative'>
           <div id="started" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-2xl py-3'>
             <h2>Selanjutnya</h2>
           </div>
           </button>
        )}
        {showElement === 'showOffline' && (
           <button id="started" className='w-[28rem] transition-all duration-300 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-2xl overflow-hidden relative'>
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