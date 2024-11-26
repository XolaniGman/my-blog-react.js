import React from 'react';
import EduContent from './EduContent';
import EduSkills from './eduSkills';


const About = () => {
    return (
   
     <div className="about-page" >

     
        <div className='about-header'>
             <h1 >About Me</h1>
            <p>I am Goodman Xolani Mchunu a Dut student have studied Diploma in ICT application develepment it 
            Where my journey of being a developer initiated with persion and drive i got from studing at Dut to 
            study online IT varsity and Alx in persuide of software Development as a career. I worked with a 
            number of developers developing variaty solution even participated at   
            MTN HECKERTHON APP OF THE YEAR AWARDS
            with an EDU-TECH SOLUTION 
            using  HTML CSS JAVASCRIPT Where my strength is.
            I have aquired lot of skills over the years Professional and Personaly what I loved is they helped
            grow in both areas. Personaly I am HUMBLE, WILL TO LEARN,  
            </p> 
        </div>
      
        
       
    

    <div className='about-text2'>
        <h2>Education</h2>
    </div>

    <div className="edu-container">
    <EduContent/>
    </div>


     <div className="skills">
        <h3>skills</h3>
        <div className="box">
            <span>
                <li className="st1">
                    <a href="#">JAVASCRIPT 70%</a>
                </li>
            </span>
            <span>
                <li className="st2">
                    <a href="#">CSS 93%</a>
                </li>
            </span>
            <span>
                <li className="st3">
                    <a href="#">HTML 95%</a>
                </li>
            </span>
            <span>
                <li className="st4">
                    <a href="#">REACT.JS 50%</a>
                </li>
            </span>
            <span>
                <li className="st5">
                    <a href="#">C# 60%</a>
                </li>
            </span>
            <span>
                <li className="st6">
                    <a href="#">SQL 75%</a>
                </li>
            </span>
        </div>
    </div>  
    <div className='otherSkills'>
        <EduSkills/>
    </div>
</div>
  
    );
}

export default About;
