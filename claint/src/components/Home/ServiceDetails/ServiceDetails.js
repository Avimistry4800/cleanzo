import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import './ServiceDetails.css'
// import { Spring } from 'react-spring';

const ServiceDetails = ({ service }) => {
    return (
        <Link
            style={{ textDecoration: "none" }}
            to={`/service/${service._id}`}
            className="col-md-4 text-center text-secondary"
        >
            <div className="mt-5 service-card">
                <h3 className="mt-4 mb-4">{service.name}</h3>
                <Zoom top left>
                    <img
                        style={{ height: "100px", borderRadius:'20px', paddingLeft:"10px" }}
                        className="img-fluid"
                        src={`data:image/png;base64,${service.image.img}`}
                        alt=""
                    />
                </Zoom>

                <Flip left>
                    <p className="text-secondary mt-3 mb-3">{service.desc}</p>
                </Flip>
                <Flip left>
                    <h6 style={{paddingBottom:"30px"}}>Service Price:$ {service.price}</h6>
                </Flip>
            </div>
        </Link>
    );
};

export default ServiceDetails;
