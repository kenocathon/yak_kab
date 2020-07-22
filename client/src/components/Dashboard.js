import React from 'react';
import Transports from '../components/Transports';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const Dashboard = () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Transports />
    </MuiPickersUtilsProvider>
  );
};

export default Dashboard;
