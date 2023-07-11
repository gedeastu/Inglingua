import './loginPage.css';
import Title from '../components/signUp/title'
import Content from '../components/signUp/content';
function Login(){
    return(
        <>
        <div className='bg-black relative h-screen flex flex-col'>
            <Title/>
            <Content/>
        </div>
        </>
    )
}
export default Login;