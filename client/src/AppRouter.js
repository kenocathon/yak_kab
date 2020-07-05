import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateAccount from './components/CreateAccount';

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create-account' component={CreateAccount} />
      </Switch>
      <Footer />
    </div>
  );
};

export default AppRouter;
