import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// import createHistory from 'history/createHashHistory';
// import createHistory from 'history/createBrowserHistory';

import SideBar from 'c/SideBar';
import Home from 'c/Home';
import Logs from 'c/Logs';
import Proxies from 'c/Proxies';
import Config from 'c/Config';

import APIDiscovery from 'c/APIDiscovery';

import { store } from '../store/configureStore';

// testing...
// import StyleGuide from 'c/StyleGuide';
// import Loading from 'c/Loading';

// for loading async chunk...not used yet

// import Loadable from './Loadable';
// const delay = t => new Promise(r => setTimeout(r, t));
// const AsyncAbout = Loadable({
//   loader: () => delay(800).then(() => import('./About'))
// });
// const AsyncHello = Loadable({
//   loader: () => import('./Hello')
// });

import './Root.scss';
import s0 from './Root.module.scss';

const Root = () => (
  <Provider store={store}>
    <Router>
      <div className={s0.app}>
        <APIDiscovery />
        <Route path="/" component={SideBar} />
        <div style={{ flexGrow: '1', overflow: 'scroll' }}>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/overview" render={() => <Home />} />
          <Route exact path="/configs" render={() => <Config />} />
          <Route exact path="/logs" render={() => <Logs />} />
          <Route exact path="/proxies" render={() => <Proxies />} />
        </div>
      </div>
    </Router>
  </Provider>
);
// <Route exact path="/__0" component={StyleGuide} />
// <Route exact path="/__1" component={Loading} />

// hot export Root
// https://github.com/gaearon/react-hot-loader/tree/v4.0.1#getting-started
export default hot(module)(Root);
