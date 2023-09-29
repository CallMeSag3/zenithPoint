import React from "react";
import "./aboutHeader.scss";
import PersonAbout from "../../images/personAbout.png";

export default function AboutHeader() {
     return (
        <div className="about-header">
            <div className="about-header__container">
                <div className="about-header__left">
                    <h1 className="about-header__title">
                        Sobre Nosotros
                    </h1>
                    <h3 className="about-header__subtitle">
                        QUIEN SOMOS?
                    </h3>
                    <p className="about-header__text">
                        La majestuosidad de la naturaleza se despliega ante mis ojos mientras camino por el frondoso bosque. Los árboles centenarios se alzan imponentes, sus hojas danzando al compás de la brisa. El aroma de la tierra húmeda y los cantos de los pájaros crean una sinfonía natural que me transporta a un estado de serenidad y contemplación. A lo lejos, un río serpenteante atraviesa el paisaje, llevando consigo la frescura y vitalidad del agua.
                    </p>
                    <a href="/" className="about-header__button">
                        Leer más
                    </a>
                </div>
                <div className="about-header__right">
                    <img src={PersonAbout} alt="AboutHeaderImg" className="about-header__img" />
                </div>
            </div>
        </div>
     )
}