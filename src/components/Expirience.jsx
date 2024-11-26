import React from 'react';
import ExpProfetional from './expProfetional';
import ExpProject from './expProject';
import myImg from '../assert/img/logo/a1.png'

const Expirience = () => {
    return (
        <div class="experience">


            <div class="heading">
                <h1>My Journey  </h1>
            </div>


            <div class="Experience-card">
                    <ExpProfetional />
                    <ExpProject />
            </div>

            <div class="Experience-img">
        <img src={myImg} alt=""/>
    </div>
        </div>






    );
}

export default Expirience;
