import './main.css'
import iconProfile from './img/Ellipse 37.svg'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function Main(){
    const TimeLoop = 4;
    const ListTeacher = () => {
        return(
            <>
            <button className='relative flex p-1 flex-col mx-auto items-center rounded-2xl gap-y-2 w-[28rem] group cursor-pointer'>
            <input id='Teacher' type="radio" value="showTeacher" name='radio' className='hidden' checked={showElement === 'showOnline'} onClick={handleChange}/>
            <label htmlFor='Teacher' className='relative z-50 p-0.5 flex items-center w-full h-[9.5rem] mx-auto shadow-lg rounded-2xl bg-gradient-to-r from-[#172A87] to-[#E05E0A] group-focus:shadow-[#1B2C85]'>
            <div className="bg-black w-full h-full rounded-2xl px-5 py-3">
            <header className='flex flex-row justify-between items-center'>
            <article className='text-white flex flex-row gap-3'>
            <img src={iconProfile} alt="" />
            <div>
            <h1 className='font-bold'>Mr. Pudidi</h1>
            <h2>Umur : 35</h2>
            </div>
            </article>
            <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#E05E0A] hidden group-focus:flex' height="1.5em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            </header>
            <main className='flex flex-row items-end justify-between pt-5'>
            <article className='text-white'>
            <h1 className='font-bold text-left'>Edukasi</h1>
            <p className='pl-5'>S.Pd di Bahasa Inggris, M.A. in English</p>
            </article>
            <button className='text-white/50'>
             More
            </button>
            </main>
            </div>
            </label>
            </button>
            </>
        )
    }
    const navigation = useNavigate()
    const [showElement,setShowElement] = useState();
    const handleChange = (event) => {
        setShowElement(event.target.value);
    };
    return(
        <>
        <div className="flex flex-col gap-5 mt-10 h-[55rem]">
         {Array(TimeLoop).fill(ListTeacher())}
         {showElement === 'showTeacher' && (
           <button id="started" onClick={()=> navigation('/TeacherSection')} className='w-[28rem] transition-all ease-in-out mx-auto duration-300 h-max bg-gradient-to-r from-[#172A87] to-[#E05E0A] p-0.5 rounded-2xl overflow-hidden relative'>
           <div id="started" className='w-full bg-gradient-to-r from-[#010101] to-[#292929] text-center text-white text-xl font-semibold rounded-2xl py-3'>
             <h2>Selanjutnya</h2>
           </div>
           </button>
        )}
        </div>
        </>
    )
}