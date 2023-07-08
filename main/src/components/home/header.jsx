import './header.css';
import Dropdown from './dropdown'
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    return(
        <>
        <header className='flex justify-between items-center relative px-5 pt-10 z-50'>
            <div id="profile" className='flex items-center gap-4'>
                <a href={{}}>
                <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="3.5em" viewBox="0 0 512 512"><path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
                </a>
                <button onClick={() => navigate('/Register')} className='text-black font-semibold py-2 px-5 bg-white rounded-lg'>
                    Login
                </button>
            </div>
            <div id="level">
                <Dropdown/>
            </div>
        </header>
        </>
    )
}
export default Header