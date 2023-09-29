import React from "react";
import "./topBar.scss";
import Home from "../../pages/home/Home";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'
import Avatar from '../../images/avatar.png'
import Close from '../../images/x.svg'
import About from "../../pages/about/About";

export default function TopBar() {
    const [active, setActive] = React.useState(false);

    const handleActive = () => {
        setActive(!active);
    }

    return (
        <div className="topbar">
            <div className="topbar__menu">
                <div className="topbar__menu-left">
                    <Link to={"/"} className="topbar__logo">
                        <img src={Logo} alt="Logo" className="topbar__logo" />
                    </Link>
                    <ul className="topbar__menu-items">
                        <li className="topbar__menu-item">
                            <Link to={'/'} className="topbar__menu-item-link">
                                Inicio
                            </Link>
                        </li>
                        <li className="topbar__menu-item">
                            <Link to={'/about'} className="topbar__menu-item-link">
                                Sobre Nosotros
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="topbar__menu-right">
                    <ul className="topbar__menu-items">
                        <li className="topbar__menu-item">
                            <Link to={"/"} className="topbar__menu-item-link">
                                Configuraciones
                            </Link>
                        </li>
                    </ul>
                    <div className="topbar__menu-avatar" onClick={handleActive}>
                        {!active ? (
                            <img src={Avatar} alt="Avatar" className="topbar__menu-avatar-img" />
                        ) : (<img src={Close} alt="Close" className="topbar__menu-avatar-img-x" />)}

                    </div>
                    {active && (
                        <ul className="topbar__menu-dropdown">
                            <li className="topbar__menu-dropdown-list">
                                <Link to={Home} className="topbar__menu-item-link">
                                    Salir
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}