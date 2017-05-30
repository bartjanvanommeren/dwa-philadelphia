import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Room from './components/Room';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
        <Route path="*" component={NotFound}/>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
