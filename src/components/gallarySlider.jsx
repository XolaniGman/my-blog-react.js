import React from 'react';
import slide1 from '../assert/img/portfoilo/npo6.png';
import slide2 from '../assert/img/portfoilo/o111.png';
import slide3 from '../assert/img/portfoilo/O1111.png';
import slide4 from '../assert/img/portfoilo/O77.png';
import slide5 from '../assert/img/portfoilo/npo3.png';


const GallarySlider = () => {
    return (
        <div>
             <div class="wrapper">
        <input type="radio" name="slide" id="one" checked/>
        <input type="radio" name="slide" id="two"/>
        <input type="radio" name="slide" id="three"/>
        <input type="radio" name="slide" id="four"/>
        <input type="radio" name="slide" id="five"/>
        <div class="img img-1">
            <img src={slide1} alt=""/>
        </div>
        <div class="img img-2">
            <img src={slide2} alt=""/>
        </div>
        <div class="img img-3">
            <img src={slide3} alt=""/>
        </div>
        <div class="img img-4">
            <img src={slide4} alt=""/>
        </div>
        <div class="img img-5">
            <img src={slide5} alt=""/>
        </div>
        <div class="sliders">
          <label for="one" class="one"></label>
          <label for="two" class="two"></label>
          <label for="three" class="three"></label>
          <label for="four" class="four"></label>
          <label for="five" class="five"></label>
        </div>
    </div>
        </div>
    );
}

export default GallarySlider;
