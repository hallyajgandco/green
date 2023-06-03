import React from 'react';
import Green from './image/Green.png';


function Banner(props) {
    return(
        <div className="g-banner">
            <img src={Green} alt="Green House of Paris" />
            <h1>Welcome to the Green House of Paris</h1>
        </div>
    );
}
export default Banner;