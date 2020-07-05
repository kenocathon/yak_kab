import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default AppRouter;
