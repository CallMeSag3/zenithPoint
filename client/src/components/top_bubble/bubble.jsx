import React from "react";
import "./bubble.scss";
import Logo from "../../images/logo.png"
import { Link } from "react-router-dom";

export default function bubble() {
    return(
        <div className="container-all">
        <div>
        <img src={Logo} alt="Logo" className="logo-image" />
          </div>
        <div className="container-login-signup">
          <header>
            <nav>
              <ul className="nav-list">
                <li className="nav-list1">
                  <div className="link-container-register">
                    <Link to="/login" className="login" >Login</Link>
                    <Link to="/signUp" className="register">Register</Link>
                  </div>
                  <div className="link-container-others">
                    <Link to= "/about" className="AboutUs">Sobre Nosotros</Link>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
         
        </div>
        </div>
    );
}