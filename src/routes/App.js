import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Login from '../containers/Login.jsx';
import Register from '../containers/Register.jsx';
import NotFound from '../containers/NotFoud.jsx';
import Layout from '../components/Layout.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/join" component={Register}></Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
