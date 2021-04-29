import React from "react";
import LightSpeed from "react-reveal/LightSpeed";

const Professionals = ({ pro }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="mt-5">
                <LightSpeed left>
                    <img src={pro.image} alt="" />
                </LightSpeed>
                <LightSpeed left>
                    <h4 className="mt-4 mb-4">{pro.name}</h4>
                </LightSpeed>
                <LightSpeed left>
                    <h3 className="text-secondary">{pro.Type}</h3>
                </LightSpeed>
                <LightSpeed left>
                    <p className="text-secondary"> {pro.Description}</p>
                </LightSpeed>
            </div>
        </div>
    );
};

export default Professionals;
