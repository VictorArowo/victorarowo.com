import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp
} from "react-icons/fa";
import { HorizontalBar } from "react-chartjs-2";

const Main = () => {
  const [page, setPage] = useState(0);

  const contentProps = useSpring({
    marginTop: page === 0 ? 0 : -900,
    zIndex: page === 0 ? 10 : 0
  });
  const projects = useSpring({
    opacity: page === 1 ? 0.98 : 0,
    marginLeft: page === 1 ? 0 : 500,
    display: page === 1 ? "flex" : "none"
  });
  const about = useSpring({
    opacity: page === 2 ? 0.98 : 0,
    marginLeft: page === 2 ? 0 : -500,
    display: page === 2 ? "flex" : "none"
  });
  const skills = useSpring({
    opacity: page === 3 ? 0.98 : 0,
    marginTop: page === 3 ? 0 : 500,
    display: page === 3 ? "flex" : "none"
  });

  const data = {
    labels: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node.JS",
      "Express",
      "C#",
      "ASP.NET Core",
      "PostgreSQL",
      "MongoDB",
      "GraphQL"
    ],
    datasets: [
      {
        label: "Skill",
        backgroundColor: [
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)",
          "rgba(255,99,132,0.4)"
        ],
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "#FF6384",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
      }
    ]
  };

  const options = {
    legend: {
      labels: {
        fontColor: "white"
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#f43517",
            fontSize: 18,
            labelString: "Test"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#f43517",
            fontSize: 14,
            suggestedMax: 100,
            beginAtZero: true,
            callback: value => ``
          }
        }
      ]
    }
  };

  return (
    <>
      <Div style={contentProps}>
        <div class="column">
          <div className="name">
            <img src="logo.png" alt="logo" width="200" height="200" />
          </div>
          <div className="tagline">
            <h3 className="me">VICTOR AROWO</h3>
            <h1>Software Developer</h1>
            <div className="horizontal">
              <FaArrowLeft
                className="bounce left"
                onClick={() => setPage(2)}
                color="#f43517"
              />
              <FaArrowRight
                className="bounce right"
                onClick={() => setPage(1)}
                color="#f43517"
              />
            </div>
            <FaArrowDown
              className="bounce"
              onClick={() => setPage(3)}
              color="#f43517"
            />
          </div>
        </div>
      </Div>

      <Projects style={projects}>
        <div className="top">
          <h1 className="header">FEATURED</h1>
          <img src="logo.png" alt="logo" width="200" height="200" />
        </div>
        <div className="projects">
          <div className="project">
            <img src="projects/Devdesk.png" width="300px" />
            <h2>Ticket Managing Tool</h2>
          </div>
          <div className="project">
            <img src="projects/Devdesk.png" width="300px" />
            <h2>Ticket Managing Tool</h2>
          </div>
          <div className="project">
            <img src="projects/Devdesk.png" width="300px" />
            <h2>Ticket Managing Tool</h2>
          </div>
          <div className="project">
            <img src="projects/Devdesk.png" width="300px" />
            <h2>Ticket Managing Tool</h2>
          </div>
        </div>
        <div className="arrow">
          <FaArrowLeft
            className="bounce right"
            onClick={() => setPage(0)}
            color="#f43517"
            fontSize="50px"
          />
        </div>
      </Projects>

      <About style={about}>
        <div className="top">
          <h1 className="header">ABOUT ME</h1>
          <img src="logo.png" alt="logo" width="200" height="200" />
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis
          accusamus expedita, error magni pariatur temporibus sit ea mollitia
          consectetur consequatur fuga quia iste quam id nostrum, numquam quas
          necessitatibus?
        </div>
        <div className="arrow">
          <FaArrowRight
            className="bounce right"
            onClick={() => setPage(0)}
            color="#f43517"
            fontSize="50px"
          />
        </div>
      </About>

      <Skills style={skills}>
        <div className="top">
          <h1 className="header">MY SKILLS</h1>
          <img src="logo.png" alt="logo" width="200" height="200" />
        </div>
        <div className="chart">
          <HorizontalBar data={data} options={options} />
        </div>
        <FaArrowUp
          className="bounce"
          onClick={() => setPage(0)}
          color="#f43517"
          fontSize="50px"
        />
      </Skills>
    </>
  );
};

const Div = styled(a.div)`
  width: 90vw;
  height: 90vh;
  background-color: #25274d;
  box-shadow: 5px 9px 15px 5px #111;
  opacity: 0.98;
  position: absolute;
  top: 5vh;
  left: 5vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  .tagline {
    /* margin-top: 20px; */
    font-size: 45px;
    font-family: "Montserrat", sans-serif;
    /* margin-left: 150px; */
    /* letter-spacing: 8px; */
    text-align: center;
    color: #f8f8ff;

    .horizontal {
      display: flex;
      justify-content: space-around;
      width: 50%;
      margin: auto;
    }
    .me {
      color: #f43517;
      font-family: "Montserrat", sans-serif;
      font-size: 70px;
    }

    .name {
      margin: auto;
      /* writing-mode: tb-rl; */
    }
  }
  .nav {
    writing-mode: tb-rl;
    height: 80%;
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    margin-right: 30px;
    font-family: "Bowlby One SC", cursive;
    color: #f43517;
    position: fixed;
    top: 10;
    left: 92%;
    z-index: 100;

    * {
      cursor: pointer;
      transition: 0.5s transform;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .bounce {
    display: inline-block;
    position: relative;
    -moz-animation: bounce 0.5s infinite linear;
    -o-animation: bounce 0.5s infinite linear;
    -webkit-animation: bounce 0.5s infinite linear;
    animation: bounce 0.5s infinite linear;
    cursor: pointer;
    transition: 0.5s transform;

    &:hover {
      transform: scale(1.01);
    }
  }

  .left {
    -moz-animation: left 0.5s infinite linear;
    -o-animation: left 0.5s infinite linear;
    -webkit-animation: left 0.5s infinite linear;
    animation: left 0.5s infinite linear;
  }

  .right {
    -moz-animation: right 0.5s infinite linear;
    -o-animation: right 0.5s infinite linear;
    -webkit-animation: right 0.5s infinite linear;
    animation: right 0.5s infinite linear;
  }

  @-webkit-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-moz-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-o-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-ms-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-webkit-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -0.2em;
    }
    70% {
      top: -0.3em;
    }
    100% {
      top: 0;
    }
  }
  @-moz-keyframes left {
    0% {
      right: 0;
    }
    50% {
      right: -0.2em;
    }
    70% {
      right: -0.3em;
    }
    100% {
      right: 0;
    }
  }
  @-o-keyframes left {
    0% {
      right: 0;
    }
    50% {
      right: -0.2em;
    }
    70% {
      right: -0.3em;
    }
    100% {
      right: 0;
    }
  }
  @-ms-keyframes left {
    0% {
      right: 0;
    }
    50% {
      right: -0.2em;
    }
    70% {
      right: -0.3em;
    }
    100% {
      right: 0;
    }
  }
  @keyframes left {
    0% {
      right: 0;
    }
    50% {
      right: -0.2em;
    }
    70% {
      right: -0.3em;
    }
    100% {
      right: 0;
    }
  }
  @-moz-keyframes right {
    0% {
      left: 0;
    }
    50% {
      left: -0.2em;
    }
    70% {
      left: -0.3em;
    }
    100% {
      left: 0;
    }
  }
  @-o-keyframes right {
    0% {
      left: 0;
    }
    50% {
      left: -0.2em;
    }
    70% {
      left: -0.3em;
    }
    100% {
      left: 0;
    }
  }
  @-ms-keyframes right {
    0% {
      left: 0;
    }
    50% {
      left: -0.2em;
    }
    70% {
      left: -0.3em;
    }
    100% {
      left: 0;
    }
  }
  @keyframes right {
    0% {
      left: 0;
    }
    50% {
      left: -0.2em;
    }
    70% {
      left: -0.3em;
    }
    100% {
      left: 0;
    }
  }
`;

const Projects = styled(Div)`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .header {
    writing-mode: tb-rl;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    color: #f43517;
  }
  .projects {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-around;
  }
  .project {
    width: 40%;
    color: #999;

    h2 {
      color: #f43517;
    }
  }
`;

const About = styled(Div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .header {
    writing-mode: tb-rl;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    color: #f43517;
  }
  .content {
    width: 70%;
    font-family: "Montserrat", sans-serif;
    color: #f8f8ff;
    font-size: 30px;
  }

  .arrow {
    margin-top: 20%;
  }
`;

const Skills = styled(Div)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .chart {
    width: 60%;
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .header {
    writing-mode: tb-rl;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    color: #f43517;
  }
`;

export default Main;
