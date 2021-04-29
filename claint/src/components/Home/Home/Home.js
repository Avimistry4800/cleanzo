import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Location from '../Location/Location';
import Project from '../Project/Project';
import Review from '../Review/Review';
import Service from '../Service/Service';
import './Home.css'
// import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div >
            <div className="home">
            <Header/>
            <HeaderMain/>
            </div>
            
            {/* <Slider/> */}
            <Service/>
            <Project/>
            <Review/>
            <AboutUs/>
           <div className="bottom">
           <Contact/>
            <Location/>
            <Footer/>
           </div>
        </div>
    );
};

export default Home;