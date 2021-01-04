import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import Logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { logoutRequest } from '../actions/index';

import "../assets/styles/components/header.scss";

const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0 ? true : false;
    const handleLogout = () => {
        props.logoutRequest({});
    }
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={Logo} alt="Platzi Video" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon} alt="user" />
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser ?
                            <li><a href="/">{user.name}</a></li>
                            : null
                    }

                    <li>
                        {
                            hasUser ?
                                <a href="#logut" onClick={handleLogout} >
                                    Cerrar sesión
                                 </a>
                                :
                                <Link to="login">
                                    Iniciar sesión
                               </Link>
                        }

                    </li>
                </ul>
            </div>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);