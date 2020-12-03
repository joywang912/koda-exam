import React from 'react';
import Slider from "react-slick";
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import './banner.scss';

const Banner = () => {
    var settings = {
        arrows: false,
        autoplay: true,
        dots: false,
        draggable: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <div className="banner-wrapper">
        <Slider {...settings}>
            <div className="banner">
                <img src={banner1} alt="banner1" />
            </div>
            <div className="banner">
                <img src={banner2} alt="banner2" />
            </div>
        </Slider>;
    </div>;
};

export default Banner;