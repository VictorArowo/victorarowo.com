/* eslint-disable react/jsx-props-no-spreading */
import * as THREE from 'three';
import React from 'react';
import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';
import Model from './components/Model';
import Controls from './components/Controls';
import Headline from './components/Headline';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';

extend({ OrbitControls });

function App() {
  return (
    <Div id="home">
      <Navbar />
      <Headline />
      <Canvas>
        <Controls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={2}
        />
        <Model />
      </Canvas>
      <About />
      <Projects />
      <Loader />
      <Contact />
    </Div>
  );
}

const Div = styled.div`
  background-color: #e08e45;
  scroll-snap-align: start;
`;

export default App;
