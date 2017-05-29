import React, {Component} from 'react';

import Door from '../Door';
import Sport from '../Sport';
import rooms from '../../rooms';
import './index.css';

class Room extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rooms: rooms,
            currentRoom: rooms,
            sports: []
        };
    }

    optionClicked = (option) => {
        if (option.nextRoom !== undefined) {
            return this.setState({currentRoom: option.nextRoom});
        }

        if (option.sports !== undefined) {
            return this.setState({sports: option.sports});
        }
    };

    render() {
        let foo;
        if (this.state.sports.length > 0) {
            foo = this.state.sports.map((sport, i) => (
                <Sport
                    key={i}
                    name={sport.name}/>
            ));
        } else {
            foo = this.state.currentRoom.options.map((option, i) => (
                <Door
                    key={i}
                    title={option.title}
                    imagePath={option.imagePath}
                    audioPath={option.audioPath}
                    doorClicked={this.optionClicked.bind(this, option)}/>
            ));
        }

        return (
            <div>
                <h1>Room</h1>
                <p>{this.state.currentRoom.question}</p>
                <div>
                    {foo}
                </div>
            </div>
        );
    }

}

export default Room;
