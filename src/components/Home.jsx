import React from 'react';
import Model from './Model';
import { Canvas } from 'react-three-fiber';

import Controls from './Controls';
import Headline from './Headline';
import Navbar from './Navbar';
import styled from 'styled-components';
const Home = () => {
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
    </Div>
  );
};

const Div = styled.div`
  background-color: #e08e45;
  scroll-snap-align: start;
`;

export default Home;
