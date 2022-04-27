import { useRef, useState } from 'react';	
import { CSSTransition } from 'react-transition-group';	
import styles from '../../../styles/Home.module.scss';
import Button from '@mui/material/Button';

const Intro = (props: any) => {	
  const [show, setShow] = useState(false);	
  const nodeRef = useRef<HTMLDivElement>(null);
  const belowNodeRef = useRef<HTMLDivElement>(null);
  if (!show) {	
    setTimeout(() => setShow(true), 100);	
  }	
  const onClick = () => {	
    props.reference.current.scrollIntoView({ behavior: 'smooth' })	
  };	
  return (	
    <div className={styles.containerHome}>	
      <CSSTransition nodeRef={nodeRef} in={show} timeout={1000} classNames="vertical-transition" unmountOnExit>	
        <div ref={nodeRef} className={styles.title}>	
          <h2>Hi, my name is Chris</h2>	
          Welcome to my website :)	
        </div>	
      </CSSTransition>	
      <CSSTransition nodeRef={belowNodeRef} in={show} timeout={1000} classNames="transition" unmountOnExit>	
        <div ref={belowNodeRef} className={styles.moreBelow}>	
          <h3>More about me below...</h3>	
          <Button variant='outlined' onClick={onClick}><h3>Or click here</h3></Button>	
        </div>	
      </CSSTransition>	
    </div>	
  );	
}	

export default Intro;