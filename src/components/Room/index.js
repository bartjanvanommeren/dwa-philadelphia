import React, {Component} from 'react';

import Door from '../Door';
import rooms from '../../rooms';
import './index.css';

class Room extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: rooms,
            currentRoom: rooms
        };
    }

    nextRoom = (room) => {
        this.setState({currentRoom: room});
    };

    render() {
        const doors = this.state.currentRoom.options.map((option, i) => (
            <Door
                key={i}
                title={option.title}
                imagePath={option.imagePath}
                audioPath={option.audioPath}
                nextRoom={this.nextRoom.bind(this, option.nextQuestion)}/>
        ));

        return (
            <div>
                <h1>Room</h1>
                <p>{this.state.question}</p>
                {doors}
            </div>
        );
    }

}

export default Room;
