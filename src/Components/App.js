import React from 'react';
import './App.css';
import Header from './Sections/Header/Header'
import AboutMe from './Sections/AboutMe/AboutMe'
import Skills from './Sections/Skills/Skills'
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
        <AboutMe></AboutMe>
        <Skills></Skills>
      </div>
    );
  }
}


export default App;
