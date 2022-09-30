import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Firstpage from "./components/firstpage";
import Secondpage from "./components/secondpage";
import Keyboard from "./components/keyboard";
function App() {
  return (
      <BrowserRouter>    
        <Routes>
          <Route path="/" element={ <Firstpage/>} />
          <Route path="/verification" element={ <Secondpage/>} />  
        </Routes>
      </BrowserRouter>
  )
}


export default App
