import React from 'react';
import Websocket from 'react-websocket';

class WebSocket extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: []
        };
        this.getDataTable = this.getDataTable.bind(this);
    }

    getDataTable()
    {
        let data = this.state.data;
        let count = 0

        let dataTableXML = [];
        for (let i in data)
        {
            count++;
            let price = data[i].price;
            let priceCount = price.toFixed(2);
            let difference = data[i].difference;
            let differenceCount = difference.toFixed(2);



            dataTableXML.push(
                <tr key={i}>
                    <td>{count}</td>
                    <td>{data[i].name}</td>
                    <td>{priceCount} </td>
                    <td className={data[i].color}><strong>{differenceCount}</strong></td>
                    <td>{data[i].time}</td>
                </tr>
            )
        }
        return dataTableXML;

    }

    handleData(data)
    {
        let dataFormatted = [];
        let previousData = this.state.data;
        data = JSON.parse(data);
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        for (let i in data)
        {
            if (previousData[data[i][0]] == undefined)
            {
                previousData[data[i][0]] = {name: data[i][0], price: data[i][1], color: '', time: dateTime, difference: 0};
            }
            else
            {
                let color = '';
                let keyData = previousData[data[i][0]];
                let difference = keyData.price - data[i][1];
                if (keyData.price > data[i][1])
                {
                    color = 'green';
                }
                else
                {
                    color = 'red';
                }
                previousData[data[i][0]] = {name: data[i][0], price: data[i][1], color: color, time: dateTime, difference: difference};
            }
        }
        this.setState({data: previousData});
    }

    render()
    {
        return (
            <div className="App">
                <Websocket url='ws://stocks.mnet.website/'
                           onMessage={this.handleData.bind(this)}/>

                <div className="container">
                    <div className="table--wrapper">

                        <div className="panel-heading">Stock Market List</div>
                        <table className="table">
                            <tbody>
                            <tr>
                                <th>#</th>
                                <th>Company Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Last Update</th>
                            </tr>
                            {this.getDataTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}


export default WebSocket;