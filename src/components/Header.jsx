import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

import "../assets/styles/components/header.scss";

const Header = () => (
    <header className="header">

        <Link to="/">
            <img className="header__img" src={Logo} alt="Platzi Video" />
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Profile" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li>
                    <Link to="login">
                        Iniciar sesión
                    </Link>
                </li>
            </ul>
        </div>
    </header>
)

export default Header;