import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import BookList from 'BookList';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={BookList}/>
    </Route>
  </Router>
);
