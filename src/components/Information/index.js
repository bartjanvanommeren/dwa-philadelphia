import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import Youtube from 'react-youtube';
import BackButton from '../BackButton';
import './index.css';
import sportsInformation from '../../sportsInformation';

class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sport: '',
            sportInformation: []
        }
    };

    componentDidMount() {
        const sport = sportsInformation[this.props.params.sportName];
        if (sport !== undefined)
            this.setState({sport: this.props.params.sportName,
                sportInformation: sport});
    };

    goBack = () => {
        browserHistory.go(-1);
    };

    render() {
        const youtubeOpts = {
            width: '920', //640
            height: '560' //390
        };
        
        return (
            <div>
                <div className="videoContainer">
                    <h1>{this.state.sport}</h1>
                    <Youtube videoId={this.state.sportInformation.videoId} opts={youtubeOpts}/>
                    <p>{this.state.sportInformation.information}</p>
                </div>
                <div className="like" onClick={this.goBack}></div>
                <div className="dislike" onClick={this.goBack}></div>
            </div>
        )
    }
}

export default Information;