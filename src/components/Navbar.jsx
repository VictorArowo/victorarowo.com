import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'rc-scroll-anim';
import { elastic as Menu } from 'react-burger-menu';
import { tabletPortrait, mobilePortrait } from '../styles/themes';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleStateChange = state => {
    setOpen(state.isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Menu
          pageWrapId={'page-wrap'}
          outerContainerId={'App'}
          isOpen={open}
          onStateChange={state => handleStateChange(state)}
        >
          <Link to="home" className="menu-item" onClick={() => closeMenu()}>
            Home
          </Link>
          <Link to="projects" className="menu-item" onClick={() => closeMenu()}>
            Projects
          </Link>
          <Link to="contact" className="menu-item" onClick={() => closeMenu()}>
            Contact Me
          </Link>
        </Menu>
      </Container>
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
    </>
  );
};

const Div = styled.nav`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  @media ${mobilePortrait} {
    display: none;
  }
  @media ${tabletPortrait} {
    display: none;
  }
  img {
    height: 70px;
    width: 70px;
    object-fit: cover;
    padding-left: 50px;
    padding-top: 10px;
    cursor: pointer;
    transition: 0.5s transform;
    z-index: 15;
    display: none;

    &:hover {
      transform: scale(1.1);
    }
  }

  .items {
    display: flex;

    * {
      margin: 0 50px;
      color: #333;
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

const Container = styled.div`
  display: none;
  @media ${tabletPortrait} {
    display: block;
    background-position: -180px 50px;
  }
  @media ${mobilePortrait} {
    background-image: none;
  }
`;

export default Navbar;
