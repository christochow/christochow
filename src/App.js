import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { stack as Menu } from 'react-burger-menu'
import AboutPage from './pages/About/AboutPage';
import Loading from './pages/Loading/LoadingComponent'
import Projects from './pages/Projects/ProjectsPage';
import './App.css';
import { Switch, Route, Redirect, NavLink, useHistory } from 'react-router-dom';

function showTitle(show, setShow, setLoading) {
  setTimeout(() => {
    setLoading(false);
    setTimeout(() => setShow(true), 1100);
  }, 1000);
}

function App() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [openNavBar, setNavBar] = useState(false);
  const history = useHistory();
  useEffect(() => {
    let listener = history.listen(() => window.scrollTo(0, 0));
    return () => listener();
  })
  showTitle(show, setShow, setLoading);
  const toggleNavBar = () => setNavBar(!openNavBar)
  const onStateChange = (state) => {
    if(state.isOpen){
     document.body.setAttribute("style", "overflow: hidden")   
    } else {
      document.body.setAttribute("style", "overflow: visible")
    }
    if (state.isOpen !== openNavBar) {
      setNavBar(state.isOpen);
    }
  }
  return (
    <div className="App">
      <CSSTransition in={loading} timeout={1000} classNames="logo-transition" unmountOnExit>
        <Loading />
      </CSSTransition>
      <CSSTransition in={show} timeout={1000} classNames="transition" unmountOnExit>
        <div>

          <Menu isOpen={openNavBar} onStateChange={onStateChange}>
            <NavLink onClick={toggleNavBar} className="menu-item" to="/about">Home</NavLink>
            <NavLink onClick={toggleNavBar} className="menu-item" to="/projects">Projects</NavLink>
          </Menu>

          <Switch>
            <Route path='/about'><AboutPage /></Route>
            <Route path='/projects'><Projects /></Route>
            <Redirect to='/about' />
          </Switch>
        </div>
      </CSSTransition>

    </div>
  );
}

export default App;
