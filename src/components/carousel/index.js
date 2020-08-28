import React, { useState } from "react";
import './style.scss'
import Carousel from 'react-bootstrap/Carousel'
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
                        src="https://cdn.shopify.com/s/files/1/0192/1043/6708/files/2_ffd03955-46dc-48a7-abf8-6f5b4a94e32a_1088x576_crop_center.png?v=1587224668"
                        alt="First slide"
                        style={{ 'height': "500px", }}
                    />

                </Carousel.Item>
                <Carousel.Item className="slider" >

                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0192/1043/6708/files/1_1088x576_crop_center.png?v=1587207697"
                        alt="Second slide"
                        style={{ 'height': "500px" }}
                    />


                </Carousel.Item>
                <Carousel.Item className="slider">

                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/BTq4tjR/image5.jpg"
                        alt="Third slide"

                    />

                </Carousel.Item>
                <Carousel.Item className="slider">

                    <img
                        className="d-block w-100"
                        src="https://secure.img1-fg.wfcdn.com/im/41598865/resize-h622-w828%5Ecompr-r85/1241/124194854/default_name.jpg"
                        alt="Third slide"

                    />


                </Carousel.Item>




            </Carousel>


        </div>



    );
}

export default CarouselPage;