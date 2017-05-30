import React, {Component} from 'react';

class Sport extends Component {

    render() {
        return (
            <div>
                <h2>Sport</h2>
                <p>{this.props.name}</p>
            </div>
        )
    }

}

export default Sport;
