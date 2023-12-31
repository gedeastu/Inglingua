import './datepicker.css'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function Datepicker(){
    const navigation = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const formatDate = (date) => {
        if (!date) return "";
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    return(
        <>
        <div className='relative z-50 flex flex-col mx-auto items-center gap-y-2 w-[28rem]'>
        <h1 className='font-semibold text-white mr-auto'>Tanggal Pelaksanaan</h1>
        <div className='p-0.5 font-normal bg-gradient-to-r from-[#172A87] to-[#E05E0A] rounded-2xl border-none outline-none ring-0'>
        <DatePicker 
        selected={selectedDate} 
        onChange={handleDateChange}
        placeholderText="Pilih Tanggal Pelaksanaan"
        dateFormat="MMMM dd, yyyy"
        renderCustomHeader={({ date }) => (
          <div>
            <h2>{formatDate(date)}</h2>
          </div>
        )}
        className='bg-black w-[28rem] h-12 mx-auto rounded-2xl border-none text-white relative z-50 focus:outline-none focus:ring-0 focus:border-none'
        />
        </div>
        </div>
        </>
    )
}