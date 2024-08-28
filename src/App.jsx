import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contacts from './components/Contacts';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
