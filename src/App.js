import React from 'react';
import Homepage from './components/Homepage.jsx'
import Startpage from './components/Startpage.jsx';
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={ <Homepage /> } />
        <Route exact path='/start' element={ <Startpage /> } />
      </Routes>
    </div>
  );
}

export default App;
