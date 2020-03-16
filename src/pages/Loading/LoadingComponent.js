import React from 'react';
import './LoadingComponent.css'
import logo from '../../assets/logo.svg'


function Loading() {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Loading...</h1>
        <img className="App-logo" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Loading;
