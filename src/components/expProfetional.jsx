import React from 'react';
import Exp from '../assert/img/services-icon.png';
import social from '../assert/img/social-icon/icon2.png';
import social1 from '../assert/img/social-icon/icon3.png';
import social2 from '../assert/img/social-icon/icon8.png';
import social3 from '../assert/img/social-icon/6.png';

import '../style/expirience.css'

const work = [
    {
        image : <img src={Exp} alt=""/>,
        title : 'levelup medical',
        subtitle :'Internship',
        test1 :'ux designe - using xamarin Xaml @ C#',
        test2 :'learned working with api on controllers',
        test3 :'Database managment - Microsoft SQL server',
        test4 :'dealing with webserver to access percience servicers',
        duration :'April 2021 To December 2021'
    },
    {
        image : <img src={Exp} alt=""/>,
        title : 'levelup medical',
        subtitle :'Internship',
        test1 :'ux designe - using xamarin Xaml @ C#',
        test2 :'learned working with api on controllers',
        test3 :'Database managment - Microsoft SQL server',
        test4 :'dealing with webserver to access percience servicers',
        duration :'April 2021 To December 2021'
    },
]

const ExpProfetional = () => {
    return (
        <div className='work-exp'>
<h2>Work Experience</h2>
{    work.map((item) => (
    <div class="exp">
            <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                    <li>{item.test1}</li>
                    <li>{item.test2}</li>
                    <li>{item.test3}</li>
                    <li>{item.test4}</li>

                    <div class="social">
                        <img src={social} alt="" className='social-image'/>
                        <img src={social1} alt="" className='social-image'/>
                        <img src={social2} alt="" className='social-image'/>
                        <img src={social3} alt="" className='social-image'/>
                        
                     </div> 
                    <h4>{item.duration}</h4>
                </div>
    ))
                    
}
        </div>
    );
}

export default ExpProfetional;
