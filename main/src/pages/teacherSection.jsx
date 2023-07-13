import './teacherSection.css'
import Header from '../components/teacherSection/header'
export default function TeacherSection(){
    return (
        <>
        <div className='bg-black relative h-screen max-w-full'>
        <Header/>
        <div id="circleRed" className='bg-[#D35A0B] absolute w-52 h-72 blur-[10rem] rounded-full -left-40 -top-10'></div>
        <div id="circleBlue" className='bg-[#172A87] absolute w-52 h-72 blur-[10rem] rounded-full right-0 -top-10'></div>
        </div>
        </>
    )
}