import React from 'react';


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchVal: ""
        }
    }

    handelSearch(e){
        this.setState({
            searchVal: e
        })
    }
    render()
    {
        return (
            <div>
                <div className="top-nav">
                    <div className="container">
                        <div className="logo">
                            <a href="#home" className="pageScroll">
                                <img src="../assets/img/logo.png" alt="logo" className="img-fluid" />
                            </a>
                        </div>
                        <div className="navigation">
                            <button type="button" className="navbar-toggle collapsed"><span className="icon-bar"></span><span
                                className="icon-bar"></span><span className="icon-bar"></span></button>
                        </div>
                        <div className="navMenu">
                            <ul className="mainMenu">
                                <li><a href="#">Deals</a></li>
                                <li><a href="#">Coupons</a></li>
                                <li><a href="#">Tips</a></li>
                                <li><a href="#">Contest</a></li>
                                <li className="search-bar">
                                    <input type="text" value={this.state.searchVal} onChange={(e) => this.handelSearch(e.target.value)} placeholder="Search for discounts"/>
                                    <a href="#">Search</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="../assets/img/flash-offer.png" alt="logo" className="scrolling-logo" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Menu</span>
                                        <img src="../assets/img/ico-menu.svg" alt="logo" className="scrolling-logo" />
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;

