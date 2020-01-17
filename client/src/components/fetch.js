import React from 'react';
import axios from 'axios';

export class FetchData extends React.Component {

    constructor(){
        super();
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
        .then(res => {this.setState({data : res.data})})
        .catch(err => console.log(err));
    };
    render() { console.log(this.state.data);
        return(
            <div>
                {this.state.data.map(players => ( <div>{players.name}</div>))}
            </div>
        )
    }
}