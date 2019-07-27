import React from 'react';
import ProductDetail from './productDetail'

class AddOne extends React.Component{
    render(){
        return(
            <div className="advertisement--one">
                <img src="../assets/img/5.png" className="img-fluid" alt=""/>
                <ul>
                    <p>Related Topics</p>
                    <li>New Zealand Vacation Packages</li>
                    <li>New Zealand Vacation Online</li>
                    <li>New Zealand Vacation Online</li>
                </ul>
            </div>
        )
    }
}
class AddTwo extends React.Component{
    render(){
        return(
            <div className="advertisement--two">
                <div className="img-wrapper hover">
                    <img src="../assets/img/1.png" className="img-fluid" alt=""/>
                    <p>BEACHES</p>
                </div>
                <div className="img-wrapper hover">
                    <img src="../assets/img/2.png" className="img-fluid" alt=""/>
                    <p>BEACHES</p>
                </div>
                <div className="img-wrapper hover">
                    <img src="../assets/img/3.png" className="img-fluid" alt=""/>
                    <p>BEACHES</p>
                </div>

            </div>
        )
    }
}
class Advertisement extends React.Component {
    render() {
        return (
            <div className="advertisement">
                <AddOne />
                <AddTwo />
                <div className="advertisement--two">
                    <img src="../assets/img/ad-img.png" className="img-fluid" alt=""/>
                </div>
            </div>
        )
    }
}


export default Advertisement;

