import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <header className="Header">
            <div className="HeaderContainer">
                <div className="HeaderLeft">
                    <ul className="MenuList">
                        <li>Quiz Игра</li>
                    </ul>
                </div>
                <div className="HeaderRight">
                    <ul className="MenuListR">
                    <li>Адрес</li>
                    <li>Телеофон</li>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header;
