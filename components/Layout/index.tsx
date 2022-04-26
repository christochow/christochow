import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Loading from '../Loading';
import Navbar from '../Navbar';

const Layout = ({ children }: {children: JSX.Element}) => {
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);

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
            <CSSTransition in={loading} timeout={1000} classNames="logo-transition root-container" unmountOnExit>
                <Loading />
            </CSSTransition>
            <CSSTransition in={show} timeout={1000} classNames="transition" unmountOnExit>
                <main>{children}</main>
            </CSSTransition>
        </div>
    )
};

export default Layout;