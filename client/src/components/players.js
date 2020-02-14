import React from 'react';
import axios from 'axios';
import {useAxiosCall} from '../hooks/useAxiosCall';
export class Players extends React.Component {

    constructor() {
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({players: res.data}) 
            console.log(res)})
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {this.state.players.map(player => <p>{player.name}</p>)}
            </div>
        )
    }
}