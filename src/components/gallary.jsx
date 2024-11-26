import React from 'react';
import Pot from '../assert/img/portfoilo/o1.png';
import Pot1 from '../assert/img/portfoilo/O77.png';
import Pot2 from '../assert/img/portfoilo/O1111.png';
import Pot3 from '../assert/img/portfoilo/N7.png';
import Pot4 from '../assert/img/portfoilo/N33.png';
import Pot5 from '../assert/img/portfoilo/npo3.png';
import '../style/gallary.css';
import GallarySlider from './gallarySlider';
const Gallary = () => {
    return (
    <div className='porfolio'>
        <div class="heading">
        <h1>Portfolio gallary </h1>
        <p>Current Projects - Website development</p>
    </div>

    <h2>GoodTech innovation</h2>
    <div class="gallary-container">
        
        <div class="gallary-img">
            <img src={Pot} alt=""/>
        </div>
       <div class="gallary-img1">
            <img src={Pot1} alt=""/>
            <img src={Pot2} alt=""/>
        </div>  
        <div class="gallary-img">
            <img src={Pot3} alt=""/>
        </div>

    <div class="gallary-img1">
            <img src={Pot4} alt=""/>
            <img src={Pot5} alt=""/>
        </div>
    </div>

    <div className='slider'>
        <GallarySlider/>
   </div>
</div>

    );
}

export default Gallary;
