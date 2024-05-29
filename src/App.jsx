import React from 'react';
import './App.css'
import Nav from './assets/Components/Nav';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import First from './assets/Components/First'
import Second from './assets/Components/Second';
import Third from './assets/Components/Third';
import Footer from './assets/Components/Footer';

function App() {
 
  return (
    <>
    
      <Nav/>
      <Router>
      <Routes>
        <Route exact path="/component-1"  element={<First/>} />
        <Route path="/component-2"  element={<Second/>}/>
        <Route path="/component-3"  element={<Third/>}/>
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
