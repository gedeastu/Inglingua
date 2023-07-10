import './App.css';
import Home from './pages/home';
import Register from './pages/registerPage';
import Login from './pages/loginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
