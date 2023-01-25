import './App.css';
import { Bird } from "./components/Bird/Bird";
import { BlackBird } from "./components/ BlackBirds/Bird"
import { Gallery } from "./components/Gallery/Gallery";
import { Germany } from './components/Poems/poem2';
import { Switzerland } from './components/Poems/poem3';
import { France } from './components/Poems/poem1';
import { Routes, Route } from "react-router-dom";


import React from 'react';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Gallery/>}/>
        <Route path='/bird' element={<Bird />} />
        <Route path='/bird2' element={<BlackBird/>}/>
        <Route path='/poems/1' element={<Germany />} />
        <Route path='/poems/2' element={<Switzerland />} />
        <Route path='/poems/3' element={<France/>}/>
      </Routes>
    </div>
  );
}

export default App;