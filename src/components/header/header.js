import React from 'react'
import Logo from './logo'
import Menu from './menu'
import User from './user'

const Header = () => {
    return (
        <header id='header' className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Logo />
                <Menu />
                <User />
            </nav>
        </header>
    )
};

export default Header;