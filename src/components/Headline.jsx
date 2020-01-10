import React from 'react';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';
import { mobilePortrait, tabletPortrait } from '../styles/themes';

const Headline = () => (
  <Div>
    <h1 className="name" key="a">
      VICTOR AROWO
    </h1>
    <h4 className="name" key="b">
      BUILDING
    </h4>
    <h2 className="name" key="c">
      WEB <span className="vl"></span>
      MOBILE <span className="vl"></span>
      A.R.
    </h2>
    <h3 className="name" key="d">
      EXPERIENCES
    </h3>
  </Div>
);

const Div = styled.div`
  font-weight: 500;
  font-family: 'Lilita One', cursive;
  font-size: 60px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin-top: 30px;

  @media ${mobilePortrait} {
    font-size: 30px;
    top: 100px;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${tabletPortrait} {
    font-size: 40px;
    top: 100px;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .vl {
    border-left: 6px solid #333;
    height: 100px;
    margin-right: 20px;
  }

  .name {
    width: 100%;
    font-family: 'Font';
    color: #333;
    @media ${mobilePortrait} {
      font-size: 30px;
      width: 90%;
    }
  }

  h1.name {
    transition: 0.5s all;
    @media ${mobilePortrait} {
      font-size: 40px;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Headline;
