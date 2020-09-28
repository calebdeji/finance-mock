import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Transactions from './containers/Transactions/Transactions';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/transactions' component={Transactions} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
