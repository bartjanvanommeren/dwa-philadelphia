import React, {Component} from 'react';

import Audio from '../Audio';
import doorImage from './deur2.svg';
import './index.css';

class Door extends Component {

    render() {
        const title = this.props.title;

        return (
            <div className="door">
                <div className="door-title">
                    <h1>{title}</h1>
                </div>
                <div className="door-audio">
                    <Audio audioPath={process.env.PUBLIC_URL + '/audio/' + this.props.audioPath}/>
                </div>
                <div className="alignDoorBottom">
                    <div className="doorDiv" onClick={this.props.goToRoom}>
                        <img src={doorImage}
                             className="doorBackgroundImg"
                             alt={title + ' door'}/>
                        <img src={this.props.doorContent}
                             alt={title + ' door content'}
                             className="doorForegroundImg"/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Door;
