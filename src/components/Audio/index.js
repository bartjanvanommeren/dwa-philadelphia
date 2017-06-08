import React, {Component} from 'react';

import audioImage from './buttons-audio.svg';
import './index.css';

class Audio extends Component {

    playAudio = () => {
        const audioPlayer = document.getElementById('audio-player');
        const source = document.getElementById('wav-source');

        source.src = this.props.audioPath;

        audioPlayer.load();
        audioPlayer.play();
    };

    render() {
        return (
            <div className="help-audio"
                 onClick={this.playAudio.bind(this)}>
                <img src={audioImage}
                     alt="audio button"/>
            </div>
        );
    }

}

export default Audio;
