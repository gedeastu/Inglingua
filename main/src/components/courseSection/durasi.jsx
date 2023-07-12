import './durasi.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function Duration(){
    const navigation = useNavigate()
    return(
        <>
        <div className='relative flex flex-col mx-auto items-center gap-y-2 w-[28rem]'>
        <h1 className='font-semibold text-white mr-auto'>Durasi Pelaksanaan</h1>
        <div id="waktu" className='relative p-0.5 flex items-center w-full h-[3.3rem] mx-auto rounded-2xl bg-gradient-to-r from-[#172A87] to-[#E05E0A]'>
        <div className='flex flex-row gap-2 items-center bg-black w-full h-full rounded-2xl border-none px-5 text-white focus:outline-none focus:ring-0'>
        <input type="number" min={1} max={2} className='bg-transparent p-0 w-2.5 text-white overflow-hidden border-none text-center m-0 focus:ring-0 focus:outline-none'/>
        <p>Jam</p>
        </div>
        </div>
        </div>
        </>
    )
}