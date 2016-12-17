import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxElm from 'redux-elm';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routerMiddleware from './utils/routerMiddleware';

export default (containerDomId, View, updater) => {
  const storeFactory = compose(
    reduxElm,
    applyMiddleware(
      routerMiddleware(browserHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const reducers = combineReducers({
    root: updater,
    routing: routerReducer,
  });

  const store = storeFactory(reducers);

  const history = syncHistoryWithStore(browserHistory, store);

  render((
    <Provider store={store}>
      <View
        history={history}
        dispatch={store.dispatch}
      />
    </Provider>
  ), document.getElementById(containerDomId))
}
