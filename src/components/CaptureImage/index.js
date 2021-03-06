import React, {Component} from 'react';

import cameraImage from './buttons-camera.svg';
import newCaptureImage from './buttons-opnieuw.svg';
import './index.css';

class CaptureImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 480,
            height: 360,
            streaming: false,
            imageCaptured: false,
            stream: false
        };
    }

    componentDidMount() {
        const video = document.getElementById('video');

        navigator.mediaDevices.getUserMedia({video: true, audio: false})
            .then((stream) => {
                this.setState({stream: stream});
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.log('failed to get stream::', err);
            });

        this.clearImage();
    }

    componentWillUnmount() {
        this.state.stream.getTracks()[0].stop();
    }

    videoCanPlay = () => {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const photo = document.getElementById('photo');

        if (!this.state.streaming) {
            this.setState({
                streaming: true
            });

            video.setAttribute('width', this.state.width);
            video.setAttribute('height', this.state.height);
            video.classList.remove('hidden');

            canvas.setAttribute('width', this.state.width);
            canvas.setAttribute('height', this.state.height);
            photo.setAttribute('width', this.state.width);
            photo.setAttribute('height', this.state.height);
        }
    };

    captureImage = () => {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const photo = document.getElementById('photo');

        const context = canvas.getContext('2d');

        if (this.state.width && this.state.height) {
            context.drawImage(video, 0, 0, this.state.width, this.state.height);

            const data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);

            this.props.setImage(data);

            video.classList.add('hidden');
            photo.classList.remove('hidden');
            this.setState({imageCaptured: true});
        } else {
            console.log('unable to capture image');
        }
    };

    clearImage = () => {
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const photo = document.getElementById('photo');

        const context = canvas.getContext('2d');
        context.fillStyle = "#AAA";

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);

        this.props.removeImage();

        video.classList.remove('hidden');
        photo.classList.add('hidden');
        this.setState({imageCaptured: false});
    };

    render() {
        return (
            <div id="camera">
                <div>
                    <video id="video"
                           onCanPlay={this.videoCanPlay.bind(this)}>
                        Video is niet beschikbaar
                    </video>
                    <canvas id="canvas">

                    </canvas>
                    <img id="photo"
                         alt="Maak een foto van jezelf"/>
                </div>
                <div id="capture-image-button-wrapper">
                    <div id="capture-image-button"
                         className="button">
                        {(!this.state.imageCaptured) ?
                            <img src={cameraImage}
                                 alt="Neem een foto"
                                 onClick={this.captureImage.bind(this)}/> :
                            <img src={newCaptureImage}
                                 alt="Nieuwe foto maken"
                                 onClick={this.clearImage.bind(this)}/>}
                    </div>
                </div>
            </div>
        );
    }

}

export default CaptureImage;
