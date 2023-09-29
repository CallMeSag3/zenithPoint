import React from "react";
import "./aboutSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonSlider from '../../images/personSlider.png'

export default function AboutSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
    }
    return (
        <div className="about-slider">
            <h2 className="about-slider__title">
                Nuestro equipo
            </h2>
            <Slider {...settings} className="about-slider__slider">
                <div className="about-slider__slider-item">
                    <img src={PersonSlider} alt="person slider" className="about-slider__slider-img" />
                    <div className="about-slider__slider-info">
                        <h4 className="about-slider__slider-info-name">
                            Jose Jaramillo
                        </h4>
                        <p className="about-slider__slider-info-role">
                            Chief Executive Officer
                        </p>
                    </div>
                </div>
                <div className="about-slider__slider-item">
                    <img src={PersonSlider} alt="person slider" className="about-slider__slider-img" />
                    <div className="about-slider__slider-info">
                        <h4 className="about-slider__slider-info-name">
                            Jose Jaramillo
                        </h4>
                        <p className="about-slider__slider-info-role">
                            Chief Executive Officer
                        </p>
                    </div>
                </div>
                <div className="about-slider__slider-item">
                    <img src={PersonSlider} alt="person slider" className="about-slider__slider-img" />
                    <div className="about-slider__slider-info">
                        <h4 className="about-slider__slider-info-name">
                            Jose Jaramillo
                        </h4>
                        <p className="about-slider__slider-info-role">
                            Chief Executive Officer
                        </p>
                    </div>
                </div>
                <div className="about-slider__slider-item">
                    <img src={PersonSlider} alt="person slider" className="about-slider__slider-img" />
                    <div className="about-slider__slider-info">
                        <h4 className="about-slider__slider-info-name">
                            Jose Jaramillo
                        </h4>
                        <p className="about-slider__slider-info-role">
                            Chief Executive Officer
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}