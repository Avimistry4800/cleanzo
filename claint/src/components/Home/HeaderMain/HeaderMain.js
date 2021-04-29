import React from 'react';
import Slider from '../Slider/Slider';
import image from '../../Image/header-bg.png';


import './HeaderMain.css';
import InfoCard from '../InfoCard/InfoCard';
import {Link } from "react-router-dom";

const HeaderMain = () => {
    return (
        <section className="container ">
            <div className="header">
            <div className="row d-flex mt-5">
             
             <div className="col-md-6">
                 <h4>Neea a clean space?</h4>
                 <h1>Meet the professional<br/> commercial cleaning you <br/> deserve</h1>
                 <br/>
                 <br/>
                 <br/>
                 <br/>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam praesentium, placeat sit culpa amet saepe.</p>
                 <div class="svg">
                     <Link style={{width:'230px'}} class="button" to="/service/:id">
                         <svg>
                             <rect height="60px" width="230px" fill="transparent" />
                         </svg>
                         <span>BOOK APPOINTMENT</span>
                     </Link>
                 </div>
             </div>
         </div>
            </div>
            {/* <InfoCard></InfoCard> */}
        </section>
    );
};

export default HeaderMain;