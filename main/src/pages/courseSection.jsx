import './courseSection.css';
import Header from '../components/courseSection/header'
import TypeClass from '../components/courseSection/tipeClass'
import JenisKelas from '../components/courseSection/jenisKelas';
import Datepicker from '../components/courseSection/datepicker';
import Time from '../components/courseSection/waktu';
import Duration from '../components/courseSection/durasi';
export default function CourseSection(){
    return(
      <>
      <div className='bg-black relative h-screen max-w-full'>
      <Header/>
      <form action="" className='flex flex-col gap-4 mt-7'>
      <JenisKelas/>
      <Datepicker/>
      <Time/>
      <Duration/>
      <TypeClass/>
      </form>
      <div id="circleRed" className='bg-[#D35A0B] absolute w-52 h-72 blur-[10rem] rounded-full -left-40 -top-10'></div>
      <div id="circleBlue" className='bg-[#172A87] absolute w-52 h-72 blur-[10rem] rounded-full right-0 -top-10'></div>
      </div>
      </>  
    )
}
