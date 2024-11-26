import React from 'react';
import Dut from '../assert/img/logo/logo 03.png';
import cjc from '../assert/img/logo/download (2).png';
import TBH from '../assert/img/logo/a1.png';
import ITV from '../assert/img/logo/logo 04.jpeg';
import ALX from '../assert/img/logo/logo 06.png';
import CSF from '../assert/img/logo/logo02.png';
import '../style/about.css';


const course = [
    
    {
        Image : <img src={Dut} alt=""/>,
        name : 'Durban Urnivesity of johannesburg',
        qualification : 'Diploma in ICT Application Development',
        year : ' 2018 - 2021',
    },
    {
        Image : <img src={cjc} alt=""/>,
        name : 'Centra Johannesburg college',
        qualification : 'Electrical Engineering N6',
        year : ' 2014 - 2016',
    },
    {
        Image : <img src={TBH} alt=""/>,
        name : 'Thubelihle high school',
        qualification : 'NCS Grade 12',
        year : ' 2008 - 2012',
    },
    {
        Image : <img src={CSF} alt=""/>,
        name : 'Cisco skills for all',
        qualification : 'Python, Communication Network, Parkert tracer',
        year : '2024 - online Currently',
    },
    {
        Image : <img src={ITV} alt=""/>,
        name : 'IT Varsity',
        qualification : 'MTM App of the year',
        year : ' 2022 - online',
    },
    {
        Image : <img src={ALX} alt=""/>,
        name : 'ALX Africa',
        qualification : 'software Engineering',
        year : ' 2022 - online',
    },
]
   

const EduContent = () => {
    return (
        <div className='about-container'>
          {
    course.map((item) => (
        <div className="Education">

           <div className='image'>{item.Image}</div>
            <h4 className='course-name'>{item.name} </h4>
            <span className="detail">
                <p className='q-name'>{item.qualification}</p>
                <p className='q-year'> {item.year}</p>
            </span>

        </div>
    ))
     
} 
        </div>
    );
}

export default EduContent;
