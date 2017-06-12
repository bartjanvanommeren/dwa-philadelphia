import React, {Component} from 'react';

import backImage from './buttons-terug.svg';
import './index.css';

class BackButton extends Component {
    render() {
        return (
            <div id="back-button"
                 className="button"
                 onClick={this.props.goBack}>
                <img src={backImage}
                     alt="back button"/>
            </div>
        );
    }
}

export default BackButton;