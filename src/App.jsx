import React from 'react';
import './App.css'
import Nav from './assets/Components/Nav';
import { Routes, Route, Router} from 'react-router-dom';
import First from './assets/Components/First'
import Second from './assets/Components/Second';
import Third from './assets/Components/Third';
import Footer from './assets/Components/Footer';

function App() {
 
  return (
    <>
      <Nav/>
     
        <Routes>
          <Route exact path="/component-1"  element={<First/>} />
          <Route path="/component-2"  element={<Second/>}/>
          <Route path="/component-3"  element={<Third/>}/>
        </Routes>
      
      <Footer/>
    </>
  )
} 

export default App
