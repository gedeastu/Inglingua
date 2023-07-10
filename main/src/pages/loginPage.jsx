import './loginPage.css';
import Title from '../components/login/title'
import Content from '../components/login/content';
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