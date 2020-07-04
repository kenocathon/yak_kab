import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import MainContent from './MainContent';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <MainContent />
      </div>
    );
  }
}
