import React from 'react';
import './OverlayComponent.css'


function Overlay(props) {
    return (
        <div className="link-container">
            <button><a href="http://google.com" target="_blank" rel="noopener noreferrer">see more</a></button>
            <div className="space"></div>
            <button><a href="http://google.com" target="_blank" rel="noopener noreferrer">see more</a></button>
        </div>
    );
}

export default Overlay;
