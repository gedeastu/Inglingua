import './registerPage.css';
import Header from '../components/home/header';
import Title from '../components/register/title';
import Hero from '../components/register/hero';
import Button from '../components/register/content'
import Copyright from '../components/register/footer'
import { Footer } from 'flowbite-react';
function Register(){
    return(
        <>
        <div className='bg-black relative h-screen flex flex-col'>
        <Title/>
        <Hero/>
        <Button/>
        <Copyright/>
        </div>
        </>
    )
}
export default Register;