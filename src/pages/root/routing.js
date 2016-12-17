import React from 'react';
import { connect } from 'react-redux';
import { forwardTo } from 'redux-elm';
import { Router, Route, IndexRoute } from 'react-router';

// import required components
import Index from '../Index/view';
import Board from '../Board/view';

/**
 * Prepare component for router
 * @param {View} View - imported view component class/name
 * @param {string} modelKey - key used in root reducer inside src/root/updater.js
 * @param {string} ...nesting - action name/identifier for component
 */
const connectView = (View, modelKey, ...nesting) =>
  connect(appState => ({ model: appState.root[modelKey] }))(
    props => <View {...props} dispatch={forwardTo(props.dispatch, ...nesting)} />);

// Here all the pages (routed components) gets wrapped
const IndexView = connectView(Index, 'index', 'Index');
const BoardView = connectView(Board, 'board', 'Board');

// this will be used inside src/root/view.js
export default history => (
  <Router history={history}>
    <Route path="/" component={IndexView} />
    <Route path="/board" component={BoardView} />
  </Router>
);