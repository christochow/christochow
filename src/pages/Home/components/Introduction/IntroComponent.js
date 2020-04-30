import React, { useState } from 'react';	
import './IntroComponent.css'	
import { CSSTransition } from 'react-transition-group';	


function Intro(props) {	
  const [show, setShow] = useState(false);	
  if (!show) {	
    setTimeout(() => setShow(true), 100);	
  }	
  const onClick = () => {	
    props.reference.current.scrollIntoView({ behavior: 'smooth' })	
  };	
  return (	
    <div className="container-home">	
      <CSSTransition in={show} timeout={1000} classNames="vertical-transition" unmountOnExit>	
        <div className="title">	
          <h1>Hi, my name is Chris</h1>	
          Welcome to my website :)	
      </div>	
      </CSSTransition>	
      <CSSTransition in={show} timeout={1000} classNames="transition" unmountOnExit>	
        <div className="more-below">	
          <h3>More about me below...</h3>	
          <button onClick={onClick}><h3>Or click here</h3></button>	
        </div>	
      </CSSTransition>	
    </div>	
  );	
}	

export default Intro;