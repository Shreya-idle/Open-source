import React from 'react';
import Contribution from './components/Contribution';
import Navbar from './components/Navbar';
import About from './components/About';
import Event from './components/Event';
import Team from './components/Team';
import OpensContribution from './components/OpensContribution';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Event/>
      <Contribution/>
      <Team/>
      <OpensContribution/>
      <Contact/>
    </div>
  );
}

export default App;
