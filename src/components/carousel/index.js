import React, { useState } from "react";
import './style.scss'
import Carousel from 'react-bootstrap/Carousel'
import Video from '../../assets/koig_interiors(1).mp4';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";



const CarouselPage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <div className=" wrapper ">

            <Carousel
                className="container-fluid "
                activeIndex={index}
                onSelect={handleSelect}

            >
                <Carousel.Item className="slider">

                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Db0kMWL/koig-global-3-CESLDPAni-Oc.jpg"
                        alt="First slide"
                        style={{ 'height': "500px", }}
                    />

                    <p> <i>Class, style, luxury</i></p>


                </Carousel.Item>
                <Carousel.Item className="slider" >

                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/BTsRjyG/koig-interiors-1-CCLam-VBhrd-W.jpg"
                        alt="Second slide"
                        style={{ 'height': "500px" }}
                    />


                </Carousel.Item>
                <Carousel.Item className="slider">

                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/R6cBnxX/koig-global-4-CESLDPAni-Oc.jpg"
                        alt="Third slide"

                    />

                    <p>Comfort at its Finest</p>


                </Carousel.Item>
                <Carousel.Item className="slider">

                    <video
                        loop
                        muted
                        autoPlay

                        src={Video}
                    ></video>

                </Carousel.Item>




            </Carousel>


        </div>



    );
}

export default CarouselPage;