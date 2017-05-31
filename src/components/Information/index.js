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
    }

    componentDidMount() {
        const sport = sportsInformation[this.props.params.sportName];
        if (sport !== undefined)
            this.setState({sport: this.props.params.sportName,
                sportInformation: sport});
    }

    goBack = () => {
        browserHistory.go(-1);
    };

    render() {
        return (
            <div className="videoContainer">
                <h1>{this.state.sport}</h1>
                <Youtube videoId={this.state.sportInformation.videoId}/>
                <p>{this.state.sportInformation.information}</p>
                <BackButton goBack={this.goBack.bind(this)}/>
            </div>
        )
    }
}

export default Information;