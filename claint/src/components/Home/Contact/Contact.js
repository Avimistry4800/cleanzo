import React from "react";
import "./Contact.css";
import image from "../../Image/login-bg.png";
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
    return (
        <main className="container row ">
            <div className="mb-2 mt-5 col-md-12 text-center d-flex justify-content-center text-brand    ">
                <h1 class="app-title">Contact With Us</h1>
            </div>
            <section className="d-flex">
           
                <div class="col-md-4 ">
                <Bounce left>
                <img src={image} alt="" />
        </Bounce>
                   
                </div>
                <div class="background col-md-8">
                    
                <Bounce right>
                <div class="screen">
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class=" align-content-center">
                                    <h2>CONTACT FORM</h2>
                                </div>
                            </div>
                            <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input
                                            class="app-form-control"
                                            placeholder="NAME"
                                        />
                                    </div>
                                    <div class="app-form-group">
                                        <input
                                            class="app-form-control"
                                            placeholder="EMAIL"
                                        />
                                    </div>
                                    <div class="app-form-group">
                                        <input
                                            class="app-form-control"
                                            placeholder="CONTACT NO"
                                        />
                                    </div>
                                    <div class="app-form-group message">
                                        <input
                                            class="app-form-control"
                                            placeholder="MESSAGE"
                                        />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </Bounce>

                    

                </div>
            </section>
        </main>
    );
};

export default Contact;
