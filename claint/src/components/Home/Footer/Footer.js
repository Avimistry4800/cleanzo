import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faGooglePlusG } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <section className=" container footer ">
            <div className="  d-flex ">
                <div className="col-md-3">
                    <h4></h4>
                    <h4 className="text-brand">About Us</h4>
                    <p>Our Team</p>
                    <p>Need FAQ ?</p>
                    <p>Reviews</p>
                    <p>Harami Investor</p>
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#51DDDA'}}>Services</h4>
                    <p>Home cleaning</p>
                    <p>Office Cleaning</p>
                    <p>Garden Cleaning</p>
                    <p>Glass Cleaning</p>
                    <p>Hotel Cleaning</p>
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#51DDDA'}}>Resources</h4>
                    <p>Training</p>
                    <p>MArketplace</p>
                    <p>Expert</p>
                    <p>Knowledge Base</p>
                </div>
                <div className="col-md-3">
                    <h4 style={{color:'#51DDDA'}}>Our Adress</h4>
                    <p>New York - 101010 Hudson Yards</p>
                    <div className=" d-flex justify-content-center " style={{color: '#51DDDA', fontSize:'2em'}}>
                        <FontAwesomeIcon style={{marginRight:'20'}} icon={faFacebook} />
                        <FontAwesomeIcon style={{marginRight:'20'}} icon={faGooglePlusG} />
                        <FontAwesomeIcon style={{marginRight:'20'}} icon={faTwitter} />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p>Call Now</p>
                    <button  className="btn btn-brand">+2543623562</button>

                    
                </div>
                    
            </div>
            <small className="col-md-12 col-s-12">Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
        </section>
    );
};

export default Footer;