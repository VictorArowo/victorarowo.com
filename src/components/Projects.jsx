import React from 'react';
import styled from 'styled-components';
import { mobilePortrait } from '../styles/themes';

const Projects = () => {
  return (
    <Div id="projects">
      <h1 className="header">Featured Projects</h1>
      <div className="featured">
        <div className="project hvrbox">
          <img
            src="./projects/Devdesk.png"
            alt="devdesk"
            className="projects hvrbox-layer_bottom"
          />

          <h3>Ticket Managing Solution</h3>
        </div>
        <div className="project hvrbox">
          <img
            src="./projects/ar.png"
            alt="devdesk"
            className="projects hvrbox-layer_bottom"
          />

          <h3>
            Augmented Reality <br /> Microfabrication Laboratory
          </h3>
        </div>
        <div className="project hvrbox">
          <img
            src="./projects/RuralSchool.png"
            alt="devdesk"
            className="projects hvrbox-layer_bottom"
          />

          <h3>
            Rural School Infrastructure <br /> Management Solution
          </h3>
        </div>
        <div className="project hvrbox">
          <img
            src="./projects/Devdesk.png"
            alt="devdesk"
            className="projects hvrbox-layer_bottom"
          />

          <h3>Devdesk Queue</h3>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  min-height: 100vh;
  background-color: #8ee3f5;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  color: #333;
  font-family: 'Varela Round', sans-serif;

  .featured {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 15vw;
  }

  .projects {
    width: 350px;
    object-fit: cover;

    @media ${mobilePortrait} {
      width: 150px;
    }
  }

  .header {
    text-align: center;
    font-size: 70px;
    color: #333;
    font-weight: 700;
    @media ${mobilePortrait} {
      margin-top: 100px;
      font-size: 30px;
    }
  }

  .project {
    margin: auto;
    margin-bottom: 20px;
    text-align: center;

    img {
      transition: 0.5s transform;

      &:hover {
        /* opacity: 0.3; */
      }
    }

    h3 {
      margin-top: 15px;
    }
  }
`;

export default Projects;
