import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Transactions from './containers/Transactions/Transactions';
import { transactions } from './utils/routes';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Redirect to={transactions} />
          </Route>
          <Route path='/transactions' component={Transactions} />
          <Route>
            <p> Page not found </p>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
