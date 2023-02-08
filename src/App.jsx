import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Details from './Pages/Details'
import Redirects from "./Components/Redirects";
import Cart from './Pages/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/details/:id' element={<Details/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Redirects />} />
      </Routes>
    </div>
  );
}

export default App;
