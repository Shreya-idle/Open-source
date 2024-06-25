import React from 'react';
import Contribution from './Contribution';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

function Event() {
    return(
        <div id="features">
            <h1> Event</h1>
            <div className="a-container">
                <Contribution image={img1} title="Open Source Sprint"/>
                <Contribution image={img2} title="Open Source Tech Symposium"/>
                <Contribution image={img3} title="Open Source Sprint"/>
                 </div>
        </div>
    )
}
export default Event;