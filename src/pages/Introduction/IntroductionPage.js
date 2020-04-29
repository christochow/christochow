import React from 'react';
import './IntroductionPage.css'
import { NavLink } from 'react-router-dom';


function Introduction() {
  return (
    <div className="container-home">
        <div className="title">
          <h1>Hi, my name is Chris</h1>
          Welcome to my website :)
      </div>
      <button className="to-project"><NavLink to='/about'><h3>About myself</h3></NavLink></button>
    </div>
  );
}

export default Introduction;
