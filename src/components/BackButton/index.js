import React, {Component} from 'react';

import backImage from './pijl terug.svg';
import './index.css';

class BackButton extends Component {
    render() {
        return (
            <div id="back-button" onClick={this.props.goBack}>
                <img src={backImage}
                     alt="back button"
                     draggable="false"/>
            </div>
        );
    }
}

export default BackButton;