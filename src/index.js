import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App';
import Room from './components/Room';
import Sports from './components/Sports';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/room/:roomId" component={Room}/>
            <Route path="/sports/:roomId/:doorId" components={Sports}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
