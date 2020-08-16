import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselPage = () => {
    return (



        <div className="slide-wrapper">

            <Carousel
                autoPlay interval="5000"
                showArrows="fasle"
                infiniteLoop="true"
                showStatus="false"
                showThumbs="false"
                swipeable
                autoplay="true" >
                <div>

                    <img
                        className="img"
                        src="https://i.ibb.co/0Q3m8j4/image3.jpg"
                        alt="First slide"
                    />

                </div>
                <div>

                    <img
                        className="img"
                        src="https://i.ibb.co/jhLqLB6/image7.jpg"
                        alt="Second slide" />

                </div>
                <div>

                    <img
                        className="img"
                        src="https://i.ibb.co/BTq4tjR/image5.jpg"
                        alt="Third slide"
                    />

                </div>



            </Carousel>


        </div>



    );
}

export default CarouselPage;