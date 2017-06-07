import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './index.css';
import Audio from '../../Audio';

class Sport extends Component {

    goToInformation = (name) => {
        browserHistory.push('/information/' + name);
    };

    render() {
        return (
            <div className="audioContainer">
                <Audio className="audio" audioPath={process.env.PUBLIC_URL + "/audio/" + this.props.audioPath}/>
                <div className="sportDescriptionContainer" onClick={this.goToInformation.bind(this, this.props.name)}>
                    <img 
                        alt={this.props.name} 
                        className="sportImage" 
                        src={process.env.PUBLIC_URL + '/assets/' + this.props.imagePath} />
                </div>
            </div>
        )
    }
}

export default Sport;