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
            sports: []
        };
    }

    componentDidMount() {
        const roomId = parseInt(this.props.params.roomId, 10);
        const doorId = parseInt(this.props.params.doorId, 10);
        
        
        
        const sports = this.findSports(this.state.rooms, roomId, doorId);
        this.setState({sports: sports});
    }

    findSports = (room, roomId, doorId) => {
        let result;

        if (roomId === room.id) {
            return room.options[doorId].sports;
        } else {
            if (room.options !== undefined) {
                for (let i = 0; i < room.options.length; i++) {
                    const option = room.options[i];

                    if (option.nextRoom !== undefined) {
                        result = this.findSports(option.nextRoom, roomId, doorId);

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
                   name={sport.name}/>
        ));

        return (
            <div>
                <div className="lastRoomContainer" id={this.props.params.roomId}>
                    <div id="options">
                        {sports}
                    </div>
                    <BackButton goBack={this.goBack.bind(this)}/>
                </div>
            </div>
        );
    }

}

export default Sports;
