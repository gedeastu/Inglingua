import './waktu.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function Waktu(){
    const navigation = useNavigate()
    const [selectedFirstTime, setSelectedFirstTime] = useState();
    const handleFirstTimeChange = (event) => {
        setSelectedFirstTime(event.target.value)
    }
    const [selectedSecondTime, setSelectedSecondTime] = useState();
    const handleSecondTimeChange = (event) => {
        setSelectedSecondTime(event.target.value)
    }
    return(
        <>
        <div className='relative flex flex-col mx-auto items-center gap-y-2 w-[28rem]'>
        <h1 className='font-semibold text-white mr-auto'>Waktu Pelaksanaan</h1>
        <div id="waktu" className='relative p-0.5 flex items-center w-full h-[3.3rem] mx-auto rounded-2xl bg-gradient-to-r from-[#172A87] to-[#E05E0A]'>
        <div className='flex flex-row items-center gap-3 text-white bg-black rounded-2xl w-full h-full text-left px-5 font-normal border-none focus:outline-none focus:ring-0'>
        <input type='time' value={selectedFirstTime} onChange={handleFirstTimeChange} className='bg-transparent rounded-xl text-center border-none px-0 py-2 focus:border'/>
        <p className='text-white'>Hingga</p>
        <input type='time' value={selectedSecondTime} onChange={handleSecondTimeChange} className='bg-transparent rounded-xl text-center border-none px-0 py-2 focus:border'/>
        </div>
        </div>
        </div>
        </>
    )
}