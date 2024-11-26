
import React from 'react';
import './App.css';
import Logo from './components/logo';
import Home from './components/home';
import About from './components/about';
import Expirience from './components/Expirience';
import Gallary from './components/gallary';





function App() {
  return (
    <div className="Body">
      <>
      <Logo/>
     <Home/>
      <About/>
      <Expirience/>
      <Gallary/>
      </>
    

     
    </div>
    
  );
}

export default App;
