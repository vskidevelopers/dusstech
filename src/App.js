import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from "react";
import Shop from './pages/Shop';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;
