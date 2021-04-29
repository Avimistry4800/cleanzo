import React from 'react';
import image from '../../Image/cleaner.png';
import Slider from '../Slider/Slider';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <section className="container row d-flex about-us">
            <div className="col-md-5 justify-content-center text-center  about-us-text">
                <h2 className="text-brand">About Us</h2>
                <p className="test-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque officia animi deleniti molestias mollitia itaque doloribus! Maiores, laborum error eaque ea accusamus perferendis neque repellendus dolorum esse, sit quibusdam? Fugiat odit asperiores sequi dignissimos sunt enim beatae distinctio labore.</p>
            </div>
            <div className="col-md-7 ">
                <Slider></Slider>
            </div>

        </section>
    );
};

export default AboutUs;