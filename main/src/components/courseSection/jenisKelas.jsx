import './jenisKelas.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
export default function JenisKelas(){
    const navigation = useNavigate()
    return(
        <>
        <div className='relative z-50 flex flex-col mx-auto items-center gap-y-2 w-[28rem]'>
        <h1 className='font-semibold text-white mr-auto'>Jenis Kelas</h1>
        <div id="jenisKelas" className='relative z-50 p-0.5 flex items-center w-full h-14 mx-auto rounded-2xl bg-gradient-to-r from-[#172A87] to-[#E05E0A]'>
        <select id='dropdownJenisKelas' className='text-white bg-black rounded-2xl w-full h-full text-left pl-5 font-bold border-none focus:outline-none focus:ring-0'>
        <option value="" selected disabled>Pilih Kelas</option>
        <option value="option1" >Beginner</option>
        <option value="option2">Intermediate</option>
        <option value="option3">Advanced</option>
        </select>
        </div>
        </div>
        </>
    )
}