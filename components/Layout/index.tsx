import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Loading from '../Loading';
import Navbar from '../Navbar';

const Layout = ({ children }: {children: JSX.Element}) => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);
    const mainNodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
          }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!loading && !show) {
            const timeout = setTimeout(() => setShow(true), 500);
            return () => clearTimeout(timeout);
        }
    }, [loading, show]);
    return (
        <div className="App">
            <Navbar />
            <CSSTransition nodeRef={nodeRef} in={loading} timeout={1000} classNames="logo-transition root-container" unmountOnExit>
                <main ref={nodeRef}><Loading /></main>
            </CSSTransition>
            <CSSTransition nodeRef={mainNodeRef} in={show} timeout={1000} classNames="transition" unmountOnExit>
                <main ref={mainNodeRef}>{children}</main>
            </CSSTransition>
        </div>
    )
};

export default Layout;