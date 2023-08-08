import React, { useState } from 'react';
import Mountains from '../../assets/mountains_trees.jpg'
const Home = () => {
    return ( 
        <div className="home-main">
            <div className="top-heading">
                <h1>We are fighting for future</h1>
                <h6>Green. Sustainable. Impactful. Social Good. Join us today for a greener future.</h6>
            </div>
            <div className="home-image">
                <div className="image">
                    <img src={Mountains} alt="" />
                </div>

            </div>
        </div>
     );
}
 
export default Home;