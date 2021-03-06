import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Room from './components/Room';
import Sports from './components/Sports';
import Information from './components/Information';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="/room/:roomId" component={Room}/>
            <Route path="/sports/:roomId/:doorId" components={Sports}/>
            <Route path="/information/:sportName" components={Information}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
