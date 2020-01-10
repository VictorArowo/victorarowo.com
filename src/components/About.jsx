import React from 'react';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import styled from 'styled-components';
import { mobilePortrait } from '../styles/themes';

const About = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <Div id="about-me">
      <IsometricGrid
        shadow
        transform="rotateX(45deg) rotateZ(45deg)"
        stackItemsAnimation={{
          properties: function(pos) {
            return {
              translateZ: (pos + 1) * 30,
              rotateZ: getRandomInt(-4, 4)
            };
          },
          options: function(pos, itemstotal) {
            return {
              type: dynamics.bezier,
              duration: 500,
              points: [
                { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] }
              ],
              delay: (itemstotal - pos - 1) * 40
            };
          }
        }}
        style={{ height: '800px', width: '900px' }}
      >
        <Cell layers={['./images/html.png', '#000000', '#000000', '#000000']} />
        <Cell layers={['./images/css.png', '#000000', '#000000', '#000000']} />
        <Cell layers={['./images/js.png', '#000000', '#000000', '#000000']} />
        <Cell layers={['./images/react.png']} />
        <Cell
          layers={['./images/postgres.png', '#000000', '#000000', '#000000']}
        />
        <Cell layers={['./images/c#.png', '#9972fc', '#c322a3', '#9eb5c2']} />
        <Cell
          layers={['./images/flutter.png', '#9972fc', '#c322a3', '#9eb5c2']}
        />
      </IsometricGrid>
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  background-color: #bdf7b7;
  scroll-snap-align: start;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'Varela Round', sans-serif;

  @media ${mobilePortrait} {
    height: 100vh;
    flex-direction: column;
    font-size: 20px;
  }
`;

export default About;
