import React from 'react';

import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './discounts/homePage'
import WebSocket from './webSocket/webSocket'


const dummy = [
    {'name': 'Apple', 'price': '100'},
    {'name': 'One Plus', 'price': '80'},
    {'name': 'Samsung', 'price': '60'},
    {'name': 'MI', 'price': '50'},
];


class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            price: '',
            date: ''
        };

    }

    render()
    {
        return (
            <div className="App">
                <div>
                    <HashRouter>
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/webSocket" component={WebSocket}/>
                            <Redirect to="/home"/>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        )
    }
}


export default App;

