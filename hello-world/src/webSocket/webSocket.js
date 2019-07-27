import React from 'react';
const dummy = [
    {'name': 'Apple', 'price': '100'},
    {'name': 'One Plus', 'price': '80'},
    {'name': 'Samsung', 'price': '60'},
    {'name': 'MI', 'price': '50'},
];


class WebSocket extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            price: '',
            date: ''
        };
        this.getDataTable = this.getDataTable.bind(this);
    }

    getDataTable()
    {
        let dataTableXML = [];
        for (let i in dummy)
        {
            dataTableXML.push(
                <tr key={i}>
                    <td>{dummy[i].name}</td>
                    <td>{dummy[i].price}</td>
                    <td>Time</td>
                </tr>
            )
        }
        return dataTableXML;
        console.log('dataTableXML', dataTableXML)
    }

    render()
    {
        return (
            <div className="App">
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>Script Name</th>
                        <th>Price</th>
                        <th>Last Update</th>
                    </tr>
                    {this.getDataTable()}
                    </tbody>
                </table>
            </div>

        )
    }
}


export default WebSocket;

