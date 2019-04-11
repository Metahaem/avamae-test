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
        <h1>Title</h1>
        </div>
        <Carousel/>
        <div className='midRow'>
          <div className='watermelonBox'><Watermelon/></div>
          <div className='formBox'><Form/></div>
        </div>
      </div>
    );
  }
}

export default App;
