import React from 'react';
import ProductDetail from './productDetail'
import Advertisement from './advertisement'


class Products extends React.Component {
    render() {
        return (
            <div className="product--wrapper" id="product--wrapper">
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-md-9">
                            <ProductDetail />
                        </div>
                        <div className="col-12 col-md-3">
                            <Advertisement />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Products;

