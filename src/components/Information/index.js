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
            sportInformation: [],
            opts: {}
        }
        
        console.log(this.state.opts);
    };

    componentDidMount() {
        const sport = sportsInformation[this.props.params.sportName.replace(/ /g,'')];
        
        var opts = {
            playerVars: sportsInformation[this.props.params.sportName.replace(/ /g,'')].playerVars
        };
        
        if (sport !== undefined)
            this.setState({
                sport: this.props.params.sportName,
                sportInformation: sport,
                opts: opts
            });
        
        console.log(this.state.sportInformation);
    };

    goBack = () => {
        browserHistory.go(-1);
    };

    render() {        
        return (
            <div>
                <div className="videoContainer">
                    <h1>{this.state.sport}</h1>
                    <Youtube videoId={this.state.sportInformation.videoId} opts={this.state.opts}/>
                    <p>{this.state.sportInformation.information}</p>
                </div>
                <div className="like" onClick={this.goBack}></div>
                <div className="dislike" onClick={this.goBack}></div>
            </div>
        )
    }
}

export default Information;