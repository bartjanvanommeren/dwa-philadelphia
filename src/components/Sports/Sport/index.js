import React, {Component} from 'react';
import {browserHistory} from 'react-router';
class Sport extends Component {

    goToInformation = (name) => {
        browserHistory.push('/information/' + name);
    };

    render() {
        return (
            <div>
                <h2 onClick={this.goToInformation.bind(this, this.props.name)}>
                    Sport
                </h2>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Sport;
