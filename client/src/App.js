import React from 'react';
import Navbar from './components/site-elements/Navbar';
import Header from './components/site-elements/Header';
import Footer from './components/site-elements/Footer';

import './assets/stylesheets/app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />

        <hr />

        <Navbar />

        <Footer />
      </ div>
    );
  }
}
