import React from "react";
import "./suggest.scss";
import Eiffel from "../../images/eiffelTower.png"
import Star from "../../images/star.png"
import Pin from "../../images/pin.png"
import Phone from "../../images/phone.png"
import Full from "../../images/full.png"
import ToGo from "../../images/toGo.png"

export default function Suggest() {
    return (
        <div className="suggest">
            <div className="suggest__container">
                <div className="suggest__top">
                    <h2 className="suggest__top-title">
                        Sugerencias
                    </h2>
                    <img src={Full} alt="FullScreen" className="suggest__top-img" />
                </div>
                <div className="suggest__content">
                    <div className="suggest__content-places">
                        <h3 className="suggest__content-title">
                            Lugares
                        </h3>
                        <ul className="suggest__content-list">
                        <li className="suggest__content-item">
                            <div className="suggest__content-cont">
                                <img src={Eiffel} alt="Img" className="suggest__content-img" />
                                <div className="suggest__content-mid">
                                    <div className="suggest__info">
                                    <h3 className="suggest__content-mid-title">
                                        Eiffel Tower
                                    </h3>
                                        <div className="suggest__info-distance">
                                            <img src={ToGo} alt="To go" className="suggest__info-distance-img" />
                                            <span className="suggest__info-distance-v">2.3km</span>
                                        </div>
                                        <div className="suggest__info-calification">
                                            <img src={Star} alt="Star" className="suggest__info-calification-img" />
                                            <span className="suggest__info-calification-v">4.5</span>
                                        </div>
                                        <div className="suggest__info-price">
                                            <span className="suggest__info-price-v">$20000</span>
                                        </div>
                                    </div>
                                    <p className="suggest__content-mid-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae beatae ut hic! Quas nemo nesciunt odio voluptate tempore laudantium provident aut. Ipsa eum reprehenderit nam fugiat nostrum repellendus esse.</p>
                                </div>
                                <div className="suggest__right">
                                    <div className="suggest__right-address">
                                        <img src={Pin} alt="Pin" className="suggest__right-img" />
                                        <p className="suggest__right-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum saepe temporibus distinctio.</p>
                                    </div>
                                    <div className="suggest__right-phone">
                                        <img src={Phone} alt="Phone" className="suggest__right-img" />
                                        <a href="tel:+132412342" className="suggest__right-text suggest__right-phone-a" >123421234</a>
                                    </div>
                                    <a href="" className="suggest__right-btn">
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </div>

                        </li>
                    </ul>
                    </div>
                    <div className="suggest__content-activities">
                        <h3 className="suggest__content-title">
                            Actividades
                        </h3>
                        <ul className="suggest__content-list">
                        <li className="suggest__content-item">
                            <div className="suggest__content-cont">
                                <img src={Eiffel} alt="Img" className="suggest__content-img" />
                                <div className="suggest__content-mid">
                                    <div className="suggest__info">
                                    <h3 className="suggest__content-mid-title">
                                        Eiffel Tower
                                    </h3>
                                        <div className="suggest__info-distance">
                                            <img src={ToGo} alt="To go" className="suggest__info-distance-img" />
                                            <span className="suggest__info-distance-v">2.3km</span>
                                        </div>
                                        <div className="suggest__info-calification">
                                            <img src={Star} alt="Star" className="suggest__info-calification-img" />
                                            <span className="suggest__info-calification-v">4.5</span>
                                        </div>
                                        <div className="suggest__info-price">
                                            <span className="suggest__info-price-v">$20000</span>
                                        </div>
                                    </div>
                                    <p className="suggest__content-mid-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae beatae ut hic! Quas nemo nesciunt odio voluptate tempore laudantium provident aut. Ipsa eum reprehenderit nam fugiat nostrum repellendus esse.</p>
                                </div>
                                <div className="suggest__right">
                                    <div className="suggest__right-address">
                                        <img src={Pin} alt="Pin" className="suggest__right-img" />
                                        <p className="suggest__right-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum saepe temporibus distinctio.</p>
                                    </div>
                                    <div className="suggest__right-phone">
                                        <img src={Phone} alt="Phone" className="suggest__right-img" />
                                        <a href="tel:+132412342" className="suggest__right-text suggest__right-phone-a" >123421234</a>
                                    </div>
                                    <a href="" className="suggest__right-btn">
                                        Ver en sitio web
                                    </a>
                                </div>
                            </div>

                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}