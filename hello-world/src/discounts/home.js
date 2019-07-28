import React from 'react';


class Home extends React.Component {
    render()
    {
        return (
            // Right now i don't have Img for mobile version so i used same img in data-mob-img'
            <div id="home" className="vegas-parent responsive-vegas"
                 data-img="./assets/img/header-img.png"
                 data-mob-img="./assets/img/header-img.png">
                <div className="container">
                    <div className="home-text">
                        <h2>Cashback Offers + Discount Offers</h2>
                        <div className="input-group">
                            <div className="input-group-btn search-panel">
                                <button type="button" className="btn btn-default dropdown-toggle"
                                        data-toggle="dropdown">
                                    <span id="search_concept">Filter by</span> <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#contains">All</a></li>
                                    <li><a href="#Demo1">Demo 2</a></li>
                                    <li><a href="#Demo2">Demo 2</a></li>
                                    <li><a href="#Demo3">Demo 3</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#all">Anything</a></li>
                                </ul>
                            </div>
                            <input type="hidden" name="search_param" value="all" id="search_param"/>
                            <input type="text" className="form-control" name="x" placeholder="Search term..."/>
                            <span className="input-group-btn">Find Coupons</span>
                        </div>
                        <div className="scrollDown">
                            <a href="JavaScript:void(0);" className="pageScroll">
                                <img src="./assets/img/ico-mouse-down.svg" id="arrow" alt="arrow" className="pulse" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


export default Home;

