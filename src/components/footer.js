import React from 'react';
import {Link} from 'react-router-dom';

const Footer=()=>{
    return (    
            <div className='footer'>
                <div id="address">
                <h3>ADDRESS</h3>
                <p>2875 E 850 N St. George, UT 84790</p>
                </div>
                <div id="contactUs">
                    <h3>CONTACT US</h3>
                    <p>info@kits.com</p>
                    <p>kits@kits.com</p>
                    <p>435.879.3633</p>
                </div>
                <div id="hours">
                    <h3>HOURS</h3>
                    <p>Mon - Fri   6am - 10pm</p> 
                    <p>Sat           10am - 10pm</p>
                    <p>Sun          10am - 6pm</p>
                </div>
            </div>
    )

}

export default Footer;