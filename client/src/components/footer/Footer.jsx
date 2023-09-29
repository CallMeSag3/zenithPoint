import React from "react";
import "./footer.scss";
import Logo from '../../images/logo.png';
import Send from '../../images/send.png';
import Phone from '../../images/phone.png';
import Evelope from '../../images/evelope.png';
import FacebookLink from '../../images/facebookLink.svg';
import InstagramLink from '../../images/instagramLink.svg';
import TwitterLink from '../../images/twitterLink.svg';
import LinkedinLink from '../../images/linkedinLink.svg';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <img src={Logo} alt="Logo" className="footer__logo-img" />
                    </div>
                    <h3 className="footer__name">ZenithSW</h3>
                </div>
                <div className="footer__content">
                    <div className="footer__contact">
                        <h3 className="footer__contact-title">
                            Envianos tus sugerencias
                        </h3>
                        <form action="post" className="footer__contact-form">
                            <input type="text" placeholder="Suggestions.." className="footer__contact-input" />
                            <button className="footer__contact-send">
                                <img src={Send} alt="Send" className="footer__contact-send-img" />
                            </button>
                        </form>
                    </div>
                    <div className="footer__about">
                        <h3 className="footer__about-title">Compañia</h3>
                        <ul className="footer__about-list">
                            <li className="footer__about-item">
                                <Link to="/about" className="footer__about-link">Sobre nosotros</Link>
                            </li>
                            <li className="footer__about-item">
                                <Link to="/" className="footer__about-link">Nuestra historia</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__media">
                        <h3 className="footer__media-title">Contactanos</h3>
                        <ul className="footer__media-list">
                            <li className="footer__media-item">
                                <img src={Phone} alt="Phone" className="footer__media-img footer__media-img-pho" />
                                <a href="tel:+5732293939399" className="footer__media-link">+5732293939399</a>
                            </li>
                            <li className="footer__media-item">
                                <img src={Evelope} alt="Email" className="footer__media-img footer__media-img-env" />
                                <a href="mailto:zenithpoint@gmail.com" className="footer__media-link">zenithpoint@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__links">
                    <ul className="footer__links-list">
                        <li className="footer__links-item">
                            <Link to="/" className="footer__links-link">
                                <img src={FacebookLink} alt="Facebook" className="footer__links-img" />
                            </Link>
                        </li>
                        <li className="footer__links-item">
                            <Link to="/" className="footer__links-link">
                                <img src={TwitterLink} alt="Twitter" className="footer__links-img" />
                            </Link>
                        </li>
                        <li className="footer__links-item">
                            <Link to="/" className="footer__links-link">
                                <img src={LinkedinLink} alt="LinkedIn" className="footer__links-img" />
                            </Link>
                        </li>
                        <li className="footer__links-item">
                            <Link to="/" className="footer__links-link">
                                <img src={InstagramLink} alt="Instagram" className="footer__links-img" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__copyrights">
                    <p className="footer__copyrights-text">
                        © 2023 Zenith Point SoftWare
                    </p>
                </div>
            </div>
        </div>
    )
}