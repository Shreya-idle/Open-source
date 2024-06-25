import React from "react";
import Contributtion from './Contribution';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';


function Contribution(props) {
    return (
        <div className="a-box">
            <div className="a-b-img"><img src="{props.image}" alt=""  /></div>
            <div className="a-b-text">
                <h2>{props.title} </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        
    )
}
export default Contribution;