import React from 'react';
import '../style/home.css'
import Mypicture from '../assert/a1.png';

const Home = () => {
    return (
    <div className='home-page'>
         <div className="home-text">
        <h1>Goodman Mchunu front-end Developer</h1>
         <a href="#" className="btn">Explore</a>
        </div>
        <div className="home-img">
        <img src={Mypicture} className="icon"></img>
    </div>       
    </div>
    );
}

export default Home;
