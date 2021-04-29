import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faCalendar, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'


const infoData = [
    {
        title: 'Opening Hours',
        description: 'Monday-Friday',
        icon: faCalendar,
        
    },
    {
        title: 'Visit owr location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        
    },
    {
        title: 'Call us now',
        description: '+154647689764',
        icon: faPhoneAlt,
        
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infoData.map(info => <InfoCard key={info.title} info ={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;