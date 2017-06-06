import React, {Component} from 'react';

import Audio from '../Audio';
import doorImage from './deur2.svg';
import audioPath from './can-you-keep-a-secret.wav';
import './index.css';

class Door extends Component {

    render() {
        const title = this.props.title;

        return (
            <div className="door">
                <div className="door-title">
                    <h1>{title}</h1>
                </div>
                <Audio audioPath={audioPath}/>
                <div className="alignDoorBottom">
                <div className="doorDiv" onClick={this.props.goToRoom}>
                    <img src={doorImage} className="doorBackgroundImg"/>
                    <img src={this.props.doorContent} className="doorForegroundImg"/>
                </div>
                </div>
            </div>
        );
    }

}

export default Door;
