import './home.css';
import Header from '../components/home/header';
import Dropdown from '../components/home/dropdown';
import StartedCourse from '../components/home/startedCourse';
import Navbar from '../components/home/navbar'
import Calendar from '../components/home/Calendar'
import { useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    return(
        <>
        <div id="bg" className='bg-black max-w-full h-max relative'>
            <Header/>
            <main className='relative z-50 py-20 px-12'>
                <h1 className='text-4xl font-bold text-white pb-5'>Welcome!👋</h1>
                <StartedCourse/>
                <Navbar/>
                <Calendar/>
            </main>
            <footer className='relative z-50'></footer>
            <div id="cirleblue" className='bg-[#172A87] h-72 w-72 absolute rounded-full blur-[10rem] top-0 left-0'>
            </div>
            <div id="cirleblue" className='bg-[#D35A0B] h-72 w-72 absolute rounded-full blur-[10rem]  bottom-0 right-0'>
            </div>
        </div>
        </>
    )
}
export default Home;