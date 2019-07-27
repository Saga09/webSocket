import React from 'react';
import Websocket from 'react-websocket';

class WebSocket extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data : []
        };
        this.getDataTable = this.getDataTable.bind(this);
    }

    getDataTable()
    {
        let data = this.state.data;
        let dataTableXML = [];
        for (let i in data)
        {
            dataTableXML.push(
                <tr key={i}>
                    <td>{data[i].name}</td>
                    <td>{data[i].price}</td>
                    <td>{data[i].time}</td>
                </tr>
            )
        }
        return dataTableXML;
        console.log('dataTableXML', dataTableXML)
    }

    handleData(data)
    {
        let dataFormatted = [];
        let previousData = this.state.data;
        data = JSON.parse(data);
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        for(let i in data)
        {
            if(previousData[data[i][0]] == undefined)
            {
                previousData[data[i][0]] = {name: data[i][0], price: data[i][1], color :'', time: dateTime };
            }
            else
            {
                let color = '';
                let keyData =  previousData[data[i][0]];
                if(keyData.price > data[i][1])
                {
                    color = 'red';
                }
                else
                {
                    color = 'green';
                }
                previousData[data[i][0]] = {name: data[i][0], price: data[i][1], color :color, time: dateTime};
            }
        }
        this.setState({data : previousData});
    }
    render()
    {
        return (
            <div className="App">
                <Websocket url='ws://stocks.mnet.website/'
                           onMessage={this.handleData.bind(this)}/>
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