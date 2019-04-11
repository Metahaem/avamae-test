import React, { Component } from 'react';
import Watermelon from './Watermelon'
import Form from './Form'
import Carousel from './Carousel'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='title'>
          Title
        </div>
        <div className='nav-bar-1'/>
          <Carousel/>
        <div className='midRow'>
          <div className='watermelonBox'><Watermelon/></div>
          <div className='formBox'><Form/></div>
        </div>
        <div className='nav-bar-2'/>
        <div className='footer'><p>Footer</p></div>
      </div>
    );
  }
}

export default App;
