import React, {Component} from 'react';

import './index.css';

class App extends Component {

    render() {
        return (
            <div>
                <audio id="audio-player">
                    <source id="wav-source" src="" type="audio/wav"/>
                    Browser does not support audio
                </audio>
                {this.props.children}
            </div>
        );
    }

}

export default App;
