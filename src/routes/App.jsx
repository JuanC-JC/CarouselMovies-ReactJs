import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Player from '../components/Player';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/:path?' exact>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact component={NotFound} />
          </Switch>
        </Layout>
      </Route>

      <Route exact path='/player/:id' component={Player} />

    </Switch>
  </BrowserRouter>
);

export default App;
