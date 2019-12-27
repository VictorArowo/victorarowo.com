import React from 'react';
import styled from 'styled-components';
import { Link } from 'rc-scroll-anim';

const Navbar = () => {
  return (
    <Div>
      <Link to="home">
        <img src="./logo.png" alt="logo" />
      </Link>
      <div className="items">
        <Link to="about-me">About Me</Link>
        <Link to="projects">Projects</Link>
        <Link to="contact">Contact Me</Link>
      </div>
    </Div>
  );
};

const Div = styled.nav`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  /* background-color: #e08e45; */

  img {
    height: 70px;
    width: 70px;
    padding-left: 50px;
    padding-top: 10px;
    cursor: pointer;
    transition: 0.5s transform;

    &:hover {
      transform: scale(1.1);
    }
  }

  .items {
    display: flex;

    * {
      margin: 0 50px;
      color: #6b2737;
      text-decoration: none;
      font-size: 20px;
      cursor: pointer;
      transition: 0.5s transform;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default Navbar;
