import React from 'react';
import Home from './components/Home/HomeComponent'
import Introduction from './components/Introduction/IntroductionComponent'

function AboutPage() {
    const ref = React.useRef();
    return (
        <div>
            <Home reference={ref}/>
            <Introduction reference={ref} />
        </div>
    );
}

export default AboutPage;
