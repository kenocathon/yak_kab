import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';

const AppRouter = () => {
  return (
    <div className='d-flex flex-column'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create-account' component={CreateAccount} />
        <Route path='/login' component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
};

export default AppRouter;
