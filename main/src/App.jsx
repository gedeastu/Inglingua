import './App.css';
import Home from './pages/home';
import Register from './pages/registerPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
