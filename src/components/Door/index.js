import React, {Component} from 'react';

import './index.css';

class Door extends Component {

    render() {
        const title = this.props.title;
        const imagePath = this.props.imagePath;
        const audioPath = this.props.imagePath;

        return (
            <div onClick={this.props.doorClicked}>
                <h1>Door</h1>
                <div>
                    {title}<br/>
                    {imagePath}<br/>
                    {audioPath}
                </div>
            </div>
        );
    }

}

export default Door;
