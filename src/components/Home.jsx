import React from 'react';
import Model from './Model';
import { Canvas } from 'react-three-fiber';

import Controls from './Controls';
import Headline from './Headline';
import Navbar from './Navbar';
import styled from 'styled-components';
import { mobilePortrait } from '../styles/themes';
const Home = () => {
  return (
    <Div id="home">
      <Navbar />
      <Headline />
      <FullCanvas>
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
      </FullCanvas>
    </Div>
  );
};

const Div = styled.div`
  background-color: #91c7b1;
  scroll-snap-align: start;

  @media ${mobilePortrait} {
    height: 100vh;
  }
`;

const FullCanvas = styled.div`
  @media ${mobilePortrait} {
    /* display: none; */
  }
`;

export default Home;
