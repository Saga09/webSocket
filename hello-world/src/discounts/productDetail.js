import React from 'react';
import productDetail from './productInfo'


class ProductDetail extends React.Component {

    getProductDetail(couponCategories)
    {
        let couponCategoriesXML = [];

        for (let i in couponCategories)
        {
            couponCategoriesXML.push(
                <div key={i} className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="product--card">
                        <div className="row vertical-middle">
                            <div className="col-12 col-sm-6">
                                <img src={"../assets/img/" + couponCategories[i].imgName} alt="Product Image"
                                     className="img-fluid"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>{couponCategories[i].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return couponCategoriesXML;
    }

    getBrandDetail(brand)
    {
        let brandXML = [];

        for (let i in brand)
        {
            brandXML.push(
                <div key={i} className="col-6 col-sm-4 col-md-4 col-lg-3">
                    <div className="product--card">
                        <div className="row vertical-middle">
                            <div className="col-12 col-sm-6">
                                <img src={"../assets/img/" + brand[i].imgName} alt="Product Image"
                                     className="img-fluid"/>
                            </div>
                            <div className="col-12 col-sm-6">
                                <p>{brand[i].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return brandXML;
    }

    render()
    {
        let couponCategories = productDetail.popularCouponCategories;
        let brand = productDetail.brand;
        return (
            <div>

                <div className="product--detail">
                    <div className="row">
                        <h2>Popular Coupon Categories <img src="../assets/img/ico-heading-style.svg"
                                                           alt=""/></h2>
                        {this.getProductDetail(couponCategories)}
                        <a href="JavaScript:void(0);" className="load--more">Load More <img src="../assets/img/ico-expand.svg"/> </a>
                    </div>
                </div>
                <div className="product--detail">
                    <div className="row">
                        <h2>Popular Coupon Categories <img src="../assets/img/ico-heading-style.svg"
                                                           alt=""/></h2>
                        {this.getBrandDetail(brand)}
                        <a href="JavaScript:void(0);" className="load--more">Load More <img src="../assets/img/ico-expand.svg"/> </a>
                    </div>
                </div>
            </div>

        )
    }
}


export default ProductDetail;

