import React from 'react';


const filterDetail = [
    {'imgSrc': 'Apparel.svg', 'name': 'Apparel'},
    {'imgSrc': 'Automotive.svg', 'name': 'Automotive'},
    {'imgSrc': 'Computers.svg', 'name': 'Computers'},
    {'imgSrc': 'Credit_Cards.svg', 'name': 'Credit Cards'},
    {'imgSrc': 'Electroincs.svg', 'name': 'Electronics'},
    {'imgSrc': 'Games.svg', 'name': 'Games'},
    {'imgSrc': 'Grocery.svg', 'name': 'Grocery'},
    {'imgSrc': 'Travel.svg', 'name': 'Travel'},
    {'imgSrc': 'More.svg', 'name': 'More'}
]

class Filter extends React.Component {
    constructor(props){
        super(props);
    }

    getFilters(){
        let filtersXml = []

        for(let i in filterDetail){
            filtersXml.push(
                <div key={i} className="item">
                    <img src={'../assets/img/'+filterDetail[i].imgSrc} alt="filter-icon" className="img-fluid" />
                    <p>{filterDetail[i].name}</p>
                </div>
            )
        }
        return filtersXml
    }

    render()
    {
        return (
            <div className="filters">
                <div className="container">
                    <div className="carousel">
                        <div className="owl-carousel filters-slider">
                            {this.getFilters()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Filter;

