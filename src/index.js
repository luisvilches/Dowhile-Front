import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory, IndexRoute} from 'react-router'
import BaseCompoenent from './components/BaseCompoenent/BaseCompoenent';
import App from './components/Container/Container';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contac';
import Service from './components/Service/Service';
import Login from './components/LoginClient/LoginClient';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={ BaseCompoenent }>
            <IndexRoute component={App}/>
            <Route path="about" component={About} />
            <Route path="service" component={Service} />
            <Route path="portfolio" component={Portfolio} />
            <Route path="contact" component={Contact} />
            <Route path="area" component={Login} />
        </Route>
    </Router>, document.getElementById('root'));
registerServiceWorker();
