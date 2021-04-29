import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Location.css'

const Location = () => {
    return (
        <main className="main">
              <h1 className="text-brand text-center mt-5">Visit Us</h1>
            <section className="container row map-section d-flex mt-5 align-content-center ">
          
            <div className='col-md-6 col-sm-12 px-5 location-text'>
                <h2>Come our place and <br/>take a look.</h2>
                <p className="text-secondary"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laborum tenetur natus doloremque odio, eveniet molestias placeat soluta consequuntur modi.</p>
            </div>
            <div className='col-md-6 col-sm-12 map'>
            <GoogleMap></GoogleMap>
        </div>
        </section>
        </main>
    );
};

export default Location;