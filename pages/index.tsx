import {useRef} from 'react';
import About from '../components/Home/About';
import Introduction from '../components/Home/Introduction';


const Home = () => {
    const reference = useRef(null);
    return (
        <div className="home" style={{textAlign: 'center'}}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <Introduction reference={reference}></Introduction>
            <About reference={reference}></About>
        </div>
    );
}

export default Home;
