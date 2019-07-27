import React from 'react';

import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './discounts/homePage'
import WebSocket from './webSocket/webSocket'



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

