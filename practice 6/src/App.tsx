import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Teams from './components/Teams';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar active="1" />
      <Gallery />
      <Teams />
      <Content />
      <Footer />
    </div>
  );
}

export default App;