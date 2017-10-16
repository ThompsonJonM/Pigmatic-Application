import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/site-elements/Main';
import Navbar from './components/site-elements/Navbar';
import Header from './components/site-elements/Header';
import Footer from './components/site-elements/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />

        <Navbar />

        <Footer />
      </ div>
    );
  }
}
