import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './redux';
import Features from './routes/Features';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Features} />
        <Route path="*" component={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
