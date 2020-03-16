import React from 'react';
import './OverlayComponent.css'


function Overlay(props) {
    return (
        <div>
            {
                props.detail.type === 'web' ? <div className="link-container">
                    <button className="btn-link"><a href={props.detail.link} target="_blank" rel="noopener noreferrer">Link to website</a></button>
                </div> : <div className="link-container">
                        <button className="btn-link"><a href={props.detail.ios} target="_blank" rel="noopener noreferrer">iOS</a></button>
                        <div className="space"></div>
                        <button className="btn-link"><a href={props.detail.android} target="_blank" rel="noopener noreferrer">Android</a></button>
                    </div>
            }
        </div>
    );
}

export default Overlay;
