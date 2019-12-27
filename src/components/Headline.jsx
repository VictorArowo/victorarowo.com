import React from 'react';
import styled from 'styled-components';
import QueueAnim from 'rc-queue-anim';

const Headline = () => (
  <Div>
    <QueueAnim delay={500} className="queue-simple">
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
    </QueueAnim>
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
  margin: 50px;
  /* z-index: 1; */

  .vl {
    border-left: 6px solid #6b2737;
    height: 100px;
    margin-right: 20px;
  }

  .name {
    width: 100%;
    font-family: 'Font';
    color: #6b2737;
  }

  h1.name {
    transition: 0.5s all;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Headline;
