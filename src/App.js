import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Slider from './components/Slider';
import FeaturedWorks from './components/FeaturedWorks';
function App() {
    return (
        <div>
            <Header />
            <MainBanner />
            <FeaturedWorks />
            <Slider />
        </div>
    );
}

export default App;
