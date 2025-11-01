import React from 'react';
import './SloganBanner.css';

const SloganBanner = () => {
    return (
        <div className="slogan-banner">
            <div className="slogan-container">
                <h1 className="slogan-text">
                    <span className="slogan-main">Apna Desh</span>
                    <span className="slogan-separator"> | </span>
                    <span className="slogan-main">Apna Ghar</span>
                </h1>
                <p className="slogan-subtitle">Proudly Indian, Made for Indian Homes</p>
            </div>
        </div>
    );
};

export default SloganBanner;