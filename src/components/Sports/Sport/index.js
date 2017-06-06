import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './index.css';

class Sport extends Component {

    goToInformation = (name) => {
        browserHistory.push('/information/' + name);
    };

    render() {
        console.log(process.env.PUBLIC_URL + '/assets/' + this.props.name.replace(/ /g,'') + ".svg");
        return (
            <div className="sportDescriptionContainer" onClick={this.goToInformation.bind(this, this.props.name)}>
                <img 
                    alt={this.props.name} 
                    className="sportImage" 
                    src={process.env.PUBLIC_URL + '/assets/' + this.props.name.replace(/ /g,'') + ".svg"} />
            </div>
        )
    }
}

export default Sport;
