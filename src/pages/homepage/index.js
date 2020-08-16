import React from 'react';
import Header from '../../components/header';
import CarouselPage from '../../components/carousel';
//import CarouselImg from '../../components/carousel/index';
//import Slider from '../../components/carousel/index';

const Homepage = () => {
    return (
        <div className="homepage">
            <Header />

            <CarouselPage />

        </div>
    )
}

export default Homepage;