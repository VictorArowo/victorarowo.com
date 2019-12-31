import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <Div id="about-me">
      <img src="./headshot.jpg" alt="profile" />
      <div className="copy">
        I'm <span className="name">Victor Arowo</span>, <br /> a software
        developer currently in Nigeria, building <br /> user-focused
        experiences.
      </div>
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

  img {
    height: 500px;
    object-fit: cover;
    border-radius: 12px;
  }

  .copy {
    width: 800px;
    font-size: 80px;
    color: #333;
  }

  .name {
    font-size: 100px;
    color: red;
  }
`;

export default About;
