import React from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
