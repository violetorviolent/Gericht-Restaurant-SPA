import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar, ScrollTop } from './components';
import './App.css';

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Header />
      <ScrollTop/>
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
};

export default App;
