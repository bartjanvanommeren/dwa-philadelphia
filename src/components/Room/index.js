import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import Door from '../Door';
import rooms from '../../rooms';
import './index.css';
import Sport from "../Sport/index";

class Room extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: rooms,
            currentRoom: {
                options: []
            }
        };
    }

    componentDidMount() {
        this.initializeComponent(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.initializeComponent(nextProps);
    }

    initializeComponent = (props) => {
        const roomId = parseInt(props.params.roomId, 10);
        let currentRoom = this.findRoom(this.state.rooms, roomId);

        this.setState({currentRoom: currentRoom});
    };

    findRoom = (room, id) => {
        let result;

        if (id === room.id) {
            return room;
        } else {
            if (room.options !== undefined) {
                for (let i = 0; i < room.options.length; i++) {
                    const option = room.options[i];

                    if (option.nextRoom !== undefined) {
                        result = this.findRoom(option.nextRoom, id);

                        if (result !== false) {
                            return result
                        }
                    }
                }
            }
            return false;
        }
    };

    goToRoom = (id) => {
        browserHistory.push('/room/' + id);
    };

    goToSports = (roomId, doorId) => {
        browserHistory.push('/sports/' + roomId + '/' + doorId);
    };

    render() {
        const doors = this.state.currentRoom.options.map((option, i) => (
            <Door
                key={i}
                title={option.title}
                imagePath={option.imagePath}
                audioPath={option.audioPath}
                goToRoom={(option.nextRoom !== undefined) ?
                    this.goToRoom.bind(this, option.nextRoom.id) :
                    this.goToSports.bind(this, this.state.currentRoom.id, i)}/>
        ));

        return (
            <div>
                <h1>Room</h1>
                {this.state.currentRoom.question}
                {doors}
            </div>
        );
    }

}

export default Room;
