/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Home from './components/Home';

extend({ OrbitControls });

function App() {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Loader />
      <Contact />
    </div>
  );
}

export default App;
