import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/Textform';
import About from './Component/About';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
}from "react-router-dom";

// ---->npm install react-router-dom
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text-Analyzer" aboutText="about" mode={mode} toggleMode={toggleMode} /> 
    <div className="container my-3">
    <Routes>
    <Route path='/' element={<TextForm/>} ></Route>
    <Route path='/about' element={<About/>}></Route>
    {/* <TextForm heading="Enter the text to analyze below" mode={mode}/> */}
    {/* <About/> */}
    </Routes>
    </div>
    
    </Router>
    </> 
  )};
export default App;