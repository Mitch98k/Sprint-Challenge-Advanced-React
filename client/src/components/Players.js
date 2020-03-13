import React from 'react';
import axios from 'axios';
export class Players extends React.Component {
    state = {
    players: []
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({players : res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return(
            <>
            {this.state.players.map(player => (
                <div>
                    <h3>{player.name}</h3>
                </div>
            ))}
            </>
        )
    }
}