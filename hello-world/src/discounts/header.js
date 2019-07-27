import React from 'react';


class Header extends React.Component {
    render()
    {
        return (
            <div>
                <div className="top-nav transparent">
                    <div className="container">
                        <div className="logo">
                            <a href="#home" className="pageScroll"><img
                                src="../assets/img/logo.png" alt="logo" className="scrolling-logo" /></a>
                        </div>
                        <div className="navigation">
                            <button type="button" className="navbar-toggle collapsed"><span className="icon-bar"></span><span
                                className="icon-bar"></span><span className="icon-bar"></span></button>
                        </div>
                        <div className="navMenu">
                            <ul className="mainMenu">
                                <li><a href="https://www.chtrbox.com">Chtrbox</a></li>
                                <li><a href="https://www.chtrbox.com/brands">Brands &amp; Agencies</a></li>
                            </ul>
                            <div className="menuButton">
                                <ul>
                                    <li className="singUp"><a href="#logInModal"
                                                              className="logInModal signUpClick logInClick"
                                                              data-toggle="modal" data-target="#exampleModal">Become a
                                        Shoutie Star!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;

