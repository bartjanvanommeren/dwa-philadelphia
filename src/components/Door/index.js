import React, {Component} from 'react';

import Audio from '../Audio';
import doorImage from './deur2.svg';
import './index.css';

class Door extends Component {

    render() {

        return (
            <div className="door">
                <div className="door-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="door-audio">
                    <Audio audioPath={process.env.PUBLIC_URL + '/audio/' + this.props.audioPath}/>
                </div>
                <div className="alignDoorBottom">
                    <div className="doorDiv" onClick={this.props.goToRoom}>
                        <img src={doorImage}
                             className="doorBackgroundImg"
                             alt='door image'/>
                        <img src={this.props.doorContent}
                             alt={this.props.doorContent}
                             className="doorForegroundImg"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Door;
