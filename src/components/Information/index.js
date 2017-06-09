import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Youtube from 'react-youtube';

import sportsInformation from '../../sportsInformation';
import thumbsUpImage from './buttons-leuk.svg';
import thumbsDownImage from './buttons-nietleuk.svg';
import './index.css';

class Information extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sport: '',
            sportInformation: [],
            opts: {}
        }
    };

    componentDidMount() {
        const sport = sportsInformation[this.props.params.sportName.replace(/ /g, '')];

        var opts = {
            playerVars: sportsInformation[this.props.params.sportName.replace(/ /g, '')].playerVars
        };

        if (sport !== undefined)
            this.setState({
                sport: this.props.params.sportName,
                sportInformation: sport,
                opts: opts
            });
    };

    goBack = () => {
        browserHistory.go(-1);
    };

    render() {
        return (
            <div id="information-container">
                <div className="videoContainer">
                    <h1>{this.state.sport}</h1>
                    <Youtube videoId={this.state.sportInformation.videoId} opts={this.state.opts}/>
                    <p>{this.state.sportInformation.information}</p>
                </div>
                <div className="like" onClick={this.goBack}>
                    <img src={thumbsUpImage}
                         alt="like"
                         draggable="false"/>
                </div>
                <div className="dislike" onClick={this.goBack}>
                    <img src={thumbsDownImage}
                         alt="dislike"
                         draggable="false"/>
                </div>
            </div>
        )
    }
}

export default Information;