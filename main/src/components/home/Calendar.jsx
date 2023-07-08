import React, { useState } from 'react';
import './Calendar.css';
import Calendar from 'react-calendar';
function MyApp() {
  const [value, onChange] = useState(new Date());
  return (
    <>
    <h1 className='font-bold text-2xl text-white mt-10 mb-3'>Jadwal</h1>
    <div className='bg-gradient-to-r from-transparent to-[#E05E0A] p-0.5 rounded-[20px]'>
    <Calendar onChange={onChange} value={value}/>
    </div>
    </>
  );
}
export default MyApp;
// import React from 'react';
// import Calendar from 'react-calendar';
// const App = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <Calendar className='fill-black text-center mx-auto' />
//     </div>
//   );
// }
// export default App;
