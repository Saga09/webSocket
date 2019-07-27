import React from 'react';
import Header from './header'
import Filter    from './filter'





class HomePage extends React.Component {
   render()
    {
        return (
            <div>
                <Header />
                <Filter />
            </div>
        )
    }
}


export default HomePage;

