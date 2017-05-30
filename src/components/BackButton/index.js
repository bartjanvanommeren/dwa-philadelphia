import React, {Component} from 'react';
import './index.css';

class BackButton extends Component {
    render() {
        return (
            <div onClick={this.props.goBack}>
                <h1>Terug</h1>
            </div>
        );
    }
}

export default BackButton;