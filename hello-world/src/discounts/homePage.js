import React from 'react';
import Header from './header'
import Filter from './filter'
import Home from './home'
import Products from './product'


class HomePage extends React.Component {
    render()
    {
        return (
            <div>
                <Header/>
                <Filter/>
                <Home/>
                <Products />
            </div>
        )
    }
}


export default HomePage;

