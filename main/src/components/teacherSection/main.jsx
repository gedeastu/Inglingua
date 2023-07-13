import './main.css'
import iconProfile from './img/Ellipse 37.svg'
export default function Main(){
    const TimeLoop = 4;

    const ListTeacher = () => {
        return(
            <>
            <div className='relative z-50 flex flex-col mx-auto items-center gap-y-2 w-[28rem]'>
            <div id="Teacher" className='relative z-50 p-0.5 flex items-center w-full h-max mx-auto rounded-2xl bg-gradient-to-r from-[#172A87] to-[#E05E0A]'>
            <div className="bg-black w-full h-full rounded-2xl px-5 py-3">
            <header className='flex flex-row items-center gap-3'>
            <img src={iconProfile} alt="" />
            <article className='text-white'>
            <h1>Mr. Pudidi</h1>
            <h2>Umur : 35</h2>
            </article>
            </header>
            <main className='flex flex-row items-end justify-between pt-5'>
            <article className='text-white'>
            <h1>Edukasi</h1>
            <p>S.Pd di Bahasa Inggris, M.A. in English</p>
            </article>
            <button className='text-white/50'>
             More
            </button>
            </main>
            </div>
            </div>
            </div>
            </>
        )
    }
    return(
        <>
        <div className="flex flex-col justify-evenly h-[45rem]">
         {Array(TimeLoop).fill(ListTeacher())}
        </div>
        </>
    )
}