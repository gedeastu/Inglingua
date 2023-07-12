import './durasi.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function Duration(){
    const navigation = useNavigate()
    return(
        <>
        <div className='relative flex flex-col mx-auto items-center gap-y-2 w-[28rem]'>
        <h1 className='font-semibold text-white mr-auto'>Durasi Pelaksanaan</h1>
        <div id="waktu" className='relative p-0.5 flex items-center w-full h-14 mx-auto rounded-2xl bg-gradient-to-r from-[#172A87] to-[#E05E0A]'>
        <input type="text" className='bg-black w-full h-full rounded-2xl' />
        </div>
        </div>
        </>
    )
}