import React from 'react';
import About from './components/About/AboutComponent';
import Introduction from './components/Introduction/IntroComponent';


function Home(props) {
    const reference = React.useRef(null);
    return (
        <div>
            <Introduction reference={reference}></Introduction>
            <About reference={reference}></About>
        </div>
    );
}

export default Home;
