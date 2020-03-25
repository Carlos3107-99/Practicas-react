import React from 'react';
import '../assets/styles/Header.scss';
import logo from '../assets/static/michi.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
    return(
        <header className="header">
            <img className="header__img" src={logo} />
            <div className="header__menu">
            <div className="header__menu--profile">
                <img  className="header__menu--profile" src={userIcon} />
            <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesion</a></li>
            </ul>
            </div>
        </header>
    );
}
export default Header;

