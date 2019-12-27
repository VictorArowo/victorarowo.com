import React from 'react';
import styled from 'styled-components';

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
          <div className="hvrbox-layer_top">
            <div className="hvrbox-text">
              <button>View Live</button>
              <br />
              <button>View on Github</button>
            </div>
          </div>
          <h3>Ticket Managing Solution</h3>
        </div>
        <div className="project hvrbox">
          <img
            src="./projects/ar.png"
            alt="devdesk"
            className="projects hvrbox-layer_bottom"
          />
          <div className="hvrbox-layer_top">
            <div className="hvrbox-text">
              <button>View Live</button>
              <br />
              <button>View on Github</button>
            </div>
          </div>
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
          <div className="hvrbox-layer_top">
            <div className="hvrbox-text">
              <button>View Live</button>
              <br />
              <button>View on Github</button>
            </div>
          </div>
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
          <div className="hvrbox-layer_top">
            <div className="hvrbox-text">
              <button>View Live</button>
              <br />
              <button>View on Github</button>
            </div>
          </div>
          <h3>Devdesk Queue</h3>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  background-color: #8ee3f5;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  color: black;

  .hvrbox {
    position: relative;
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    height: auto;
  }
  .hvrbox img {
    max-width: 100%;
  }
  .hvrbox .hvrbox-layer_bottom {
    display: block;
  }
  .hvrbox .hvrbox-layer_top {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.6); */
    color: #fff;
    padding: 15px;
    -moz-transition: all 0.4s ease-in-out 0s;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -ms-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }
  .hvrbox:hover .hvrbox-layer_top,
  .hvrbox.active .hvrbox-layer_top {
    opacity: 1;
  }
  .hvrbox .hvrbox-text {
    text-align: center;
    font-size: 18px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .hvrbox .hvrbox-text_mobile {
    font-size: 15px;
    border-top: 1px solid rgb(179, 179, 179); /* for old browsers */
    border-top: 1px solid rgba(179, 179, 179, 0.7);
    margin-top: 5px;
    padding-top: 2px;
    display: none;
  }
  .hvrbox.active .hvrbox-text_mobile {
    display: block;
  }

  .featured {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* margin: 0 15vw; */
  }

  .hvrbox:hover > img {
    opacity: 0.5;
    transition: 1s all;
  }

  .projects {
    width: 500px;
    object-fit: cover;
  }

  .header {
    text-align: center;
    font-size: 50px;
    color: black;
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

  .hvrbox-text {
    margin-top: -30px;
    height: 40%;
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;

    button {
      width: 240px;
      height: 60px;
      border-radius: 0px;
      border: none;
      color: white;
      background-color: #e08e46;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export default Projects;
