import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import Door from '../Door';
import BackButton from '../BackButton';
import Audio from '../Audio';
import rooms from '../../rooms';
import './index.css';

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

    goBack = () => {
        browserHistory.go(-1);
    };

    render() {
        const doors = this.state.currentRoom.options.map((option, i) => (
            <Door
                key={i}
                title={option.title}
                doorContent={process.env.PUBLIC_URL + '/assets/' + option.doorContent}
                audioPath={option.audioPath}
                goToRoom={(option.nextRoom !== undefined) ?
                    this.goToRoom.bind(this, option.nextRoom.id) :
                    this.goToSports.bind(this, this.state.currentRoom.id, i)}/>
        ));

        const doorAssets = this.state.currentRoom.options.map((option, i) => (
            <img
                key={i}
                src={process.env.PUBLIC_URL + '/assets/' + option.doorOutside}
                className={option.side}
                onClick={(option.nextRoom !== undefined) ?
                    this.goToRoom.bind(this, option.nextRoom.id) :
                    this.goToSports.bind(this, this.state.currentRoom.id, i)}
            />
        ));

        const backButton = (this.state.currentRoom.id !== 0) ?
            <BackButton
                goBack={this.goBack.bind(this)}/> : '';

        return (
            <div>
                <div id="wall">
                    <div id="help-audio">
                        <Audio audioPath={process.env.PUBLIC_URL + '/audio/' + this.state.currentRoom.audioPath}/>
                    </div>
                    <div id="doors">
                        {doors}
                    </div>
                </div>
                <div id="assets">
                    {doorAssets}
                </div>
                <div id="floor">
                    {backButton}
                </div>
            </div>
        );
    }
}

export default Room;
