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
                <div className="doorImg"><img src={doorImage} alt="door"
                     onClick={this.props.goToRoom}/></div>
            </div>
        );
    }

}

export default Door;
