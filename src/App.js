import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from "react";
import Shop from './pages/Shop';
import Auth from './pages/Auth'
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/detail/:slug' element={<Detail/>} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
