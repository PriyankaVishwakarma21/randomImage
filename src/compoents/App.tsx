import './App.css';
import Navbar from './NavBar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/History';
import Cart from '../pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/history' element={<History />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;