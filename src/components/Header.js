import React from 'react';

const Header = () => {
    return (
        <div id="large-header" className="large-header">
            <span className="b-color">B</span>
            <span className="l-color">L</span>
            <span className="i-color">I</span>
            <span className="n-color">N</span>
            <span className="k-color">K</span>
            <span className="a-color">A</span>
            <p className="description-text">YOUR CUTTING-EDGE BOOST FOR TEAM AND INDIVIDUAL BRAINPOWER</p>
            <div className="chevron-container">
                <div className="chevron"></div>
                <br></br>
            </div>
            <p className="small-description-text">CAN YOU KEEP UP?</p>
        </div>
    );
};

export default Header;
