import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from "react";
import Shop from './pages/Shop';
import Detail from './pages/Detail';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/detail/:item' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
