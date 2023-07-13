import './App.css';
import Home from './pages/home';
import Register from './pages/registerPage';
import Login from './pages/loginPage';
import SignUp from './pages/signUpPage';
import CourseSection from './pages/courseSection';
import TeacherSection from './pages/teacherSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/CourseSection' element={<CourseSection/>}/>
        <Route path='/TeacherSection' element={<TeacherSection/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
