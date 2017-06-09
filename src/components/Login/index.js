import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import Audio from '../Audio';
import CaptureImage from '../CaptureImage';
import audioPath from './Begin van sportestic.mp3';
import startImage from './buttons-start.svg';
import './index.css';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            picture: '',
            canStart: false
        };
    }

    setImage = (picture) => {
        this.setState({
            picture: picture,
            canStart: true
        });
    };

    removeImage = () => {
        this.setState({
            picture: '',
            canStart: false
        });
    };

    start = (e) => {
        e.preventDefault();

        browserHistory.push('/room/0');
    };

    render() {
        return (
            <div id="login">
                <div id="help-audio">
                    <Audio audioPath={audioPath}
                           autoPlay={true}/>
                </div>
                <h1>Sportestic</h1>
                <div id="login-form">
                    <CaptureImage setImage={this.setImage.bind(this)}
                                  removeImage={this.removeImage.bind(this)}/>
                    {(this.state.canStart) ?
                        <div id="start-button">
                            <img src={startImage}
                                 alt="Start knop"
                                 onClick={this.start.bind(this)}/>
                        </div> :
                        ''}
                </div>
            </div>
        );
    }

}

export default Login;
