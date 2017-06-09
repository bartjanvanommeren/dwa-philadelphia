import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import rooms from '../../rooms';
import Sport from "./Sport";
import BackButton from "../BackButton";
import './index.css';

class Sports extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: rooms,
            sports: [],
            background: "test"
        };
    }

    componentDidMount() {
        const roomId = parseInt(this.props.params.roomId, 10);
        const doorId = parseInt(this.props.params.doorId, 10);

        const room = this.findRoom(this.state.rooms, roomId, doorId);
        this.setState({sports: room.sports, background: room.sportsOverviewBackground});
    }

    findRoom = (room, roomId, doorId) => {
        let result;

        if (roomId === room.id) {
            return room.options[doorId];
        } else {
            if (room.options !== undefined) {
                for (let i = 0; i < room.options.length; i++) {
                    const option = room.options[i];

                    if (option.nextRoom !== undefined) {
                        result = this.findRoom(option.nextRoom, roomId, doorId);

                        if (result !== false) {
                            return result
                        }
                    }
                }
            }
            return false;
        }
    };

    goBack = () => {
        browserHistory.go(-1);
    };

    render() {
        const sports = this.state.sports.map((sport, i) => (
            <Sport key={i}
                   name={sport.name}
                   audioPath={sport.audioPath}
                   imagePath={sport.imagePath}
                   id={(sport.imageId !== undefined) ? sport.imageId : ''}
            />
        ));

        const background = this.state.background;

        return (
            <div className={background}>
                <div className="filler"></div>
                <div id="options">
                    {sports}
                </div>
                <BackButton goBack={this.goBack.bind(this)}/>
            </div>
        );
    }
}

export default Sports;
