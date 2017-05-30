import React, {Component} from 'react';

import rooms from '../../rooms';
import Sport from "../Sport/index";

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

        const sports = this.findSports(this.state.rooms, roomId);
        this.setState({sports: sports});
    }

    findSports = (room, roomId, doorId) => {
        let result;

        if (roomId === room.id) {
            return room.options[0].sports;
        } else {
            if (room.options !== undefined) {
                for (let i = 0; i < room.options.length; i++) {
                    const option = room.options[i];

                    if (option.nextRoom !== undefined) {
                        result = this.findSports(option.nextRoom, roomId);

                        if (result !== false) {
                            return result
                        }
                    }
                }
            }
            return false;
        }
    };

    render() {
        const sports = this.state.sports.map((sport, i) => (
            <Sport key={i}
                   name={sport.name}/>
        ));

        return (
            <div>
                <h1>Sports</h1>
                {sports}
            </div>
        );
    }

}

export default Sports;
