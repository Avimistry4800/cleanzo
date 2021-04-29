import React from 'react';
import professional1 from '../../Image/professional-1.png';
import professional2 from '../../Image/professional-2.png';
import professional3 from '../../Image/professional3.png';
import Professionals from '../Professionals/Professionals';


const proData = [
    {
        image: professional1,
        name: 'John Dev',
        Type: 'Home Cleaner',
        details:'lorem15'
    },
    {
        image: professional2,
        name: 'Pro Dude',
        Type: 'Full Stack Cleaner',
        details:'lorem15'
    },
    {
        image: professional3,
        name: 'Mongors Tun',
        Type: 'Full Stack Cleaner',
        details:'lorem15'
    }
]


const Project = () => {
    return (
        <section className="service-container">
            <div className="text-center mt-5">
                <h5>PROJECTS</h5>
                <h1 className="text-brand">Browse Our Professionals</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            proData.map(pro => <Professionals pro={pro}></Professionals>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;