import React from 'react';
import '../style/menu.css'
import Bilogo from '../assert/Bihome.png';
//import BiHome from '../react-icon/bi/cloud-fog-icon.webp';
// import BiTask from '../react-icon/bi/icon1.png';
// import BiReport from '../react-icon/bi/icon1a.webp';
// import BiState from '../react-icon/bi/icon12.png.webp';
// import BiMassage from '../react-icon/bi/icon33.webp';



const Logo = () => {
    return (
            <section className="menu">
               <div className="logo">
                   <h2>Xolani</h2>
               </div>
       
               <div className="menu-list">
                   <a href="#" className="item"> home</a>
                   <a href="#" className="item">About  </a>
                   <a href="#" className="item">Education</a>
                   <a href="#" className="item"> Expirience </a>
                   <a href="#" className="item"> Massage</a>
               </div>
               
               <div className='menu-icon'>
               <img src={Bilogo} className="icon"></img>
               </div>
         
           </section>
    );
}

export default Logo;
