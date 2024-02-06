import logo from './logo.svg';
import './App.css';
import React from 'react';

import profileImage from './3ACF6FD8-3F52-4DD5-8108-5236E1E151B6.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={profileImage} className="App-profile-image" alt="Profile" />
        <h1>Wei-Cheng Sung </h1>
        <h1>Wilson</h1>
        <p>Hello! I'm a software developer with a passion for building web applications.</p>
        <p>Here's a list of my skills:</p>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <p>Contact me at <a href="wilsonsung112805@gmail.com">wilsonsung112805@gmail.com</a></p>
      </header>
    </div>
  );
}

export default App;
