import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated as a } from "react-spring";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaGithub,
  FaGlobeAfrica,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { HorizontalBar } from "react-chartjs-2";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "react-tabs/style/react-tabs.css";
import { Tag, Tabs } from "antd";
import {
  mobilePortrait,
  tabletPortrait,
  smallLaptop
} from "../styles/breakpoints";
const { TabPane } = Tabs;

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Div style={contentProps}>
        <div className="column">
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
          <div className="links">
            <p>
              <a href="mailto:arowov@gmail.com" target="_top" className="email">
                arowov@gmail.com
              </a>
            </p>
            <div class="socials">
              <a
                href="https://twitter.com/ArowoV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/victor-arowo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/VictorArowo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </Div>

      <Projects style={projects}>
        <div className="top">
          <h1 className="header">FEATURED</h1>
          <Tabs defaultActiveKey="1" style={{ marginTop: "20px" }}>
            <TabPane tab="Applications" key="1">
              <div className="projects">
                <div className="project">
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                  >
                    <FrontSide>
                      <h3>DevDesk Queue</h3>
                      <img src="projects/Devdesk.png" />
                    </FrontSide>
                    <BackSide>
                      <h3>DevDesk Queue</h3>
                      <p style={{ color: "#f8f8ff" }}>
                        A ticket logging and tracking app, built to be used in
                        educational institutions. Has an accompanying slackbot
                        for a better user experience.
                      </p>
                      {["React", "Node.JS", "PostgreSQL"].map((elem, idx) => {
                        return (
                          <Tag key={idx} closable={false}>
                            {elem}
                          </Tag>
                        );
                      })}
                      <div
                        className="links"
                        style={{
                          color: "#f8f8ff",
                          fontSize: "38px",
                          width: "40%",
                          display: "flex",
                          justifyContent: "space-around",
                          margin: "auto",
                          marginTop: "10px"
                        }}
                      >
                        <FaGithub />
                        <FaGlobeAfrica />
                      </div>
                    </BackSide>
                  </Flippy>
                </div>
                <div className="project">
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                  >
                    <FrontSide>
                      <h3>Intl. Rural School</h3>
                      <img src="projects/RuralSchool.png" />
                    </FrontSide>
                    <BackSide style={{ color: "#f43517" }}>
                      <h3>Intl. Rural School</h3>
                      <p style={{ color: "#f8f8ff" }}>
                        An infrastructure management app for small schools that
                        need assistance from foreign organizations.
                      </p>
                      {["React", "Node.JS", "PostgreSQL"].map((elem, idx) => {
                        return (
                          <Tag key={idx} closable={false}>
                            {elem}
                          </Tag>
                        );
                      })}
                      <div
                        className="links"
                        style={{
                          color: "#f8f8ff",
                          fontSize: "38px",
                          width: "40%",
                          display: "flex",
                          justifyContent: "space-around",
                          margin: "auto",
                          marginTop: "10px"
                        }}
                      >
                        <FaGithub />
                        <FaGlobeAfrica />
                      </div>
                    </BackSide>
                  </Flippy>
                </div>
                <div className="project">
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                  >
                    <FrontSide>
                      <h3>AR Lab</h3>
                      <img src="projects/ar.png" />
                    </FrontSide>
                    <BackSide style={{ color: "#f43517" }}>
                      <h3>Ticket Managing Tool</h3>
                    </BackSide>
                  </Flippy>
                </div>{" "}
                <div className="project">
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                  >
                    <FrontSide>
                      <h3>Lambda Door</h3>
                      <img src="projects/LambdaDoor.png" />
                    </FrontSide>
                    <BackSide style={{ color: "#f43517" }}>
                      <h3>Lambda Door</h3>
                      <p style={{ color: "#f8f8ff" }}>
                        An all-in-one job portal geared towards Lambda School
                        students looking for jobs. Lambda School students can
                        post reviews about jobs and interview processes.
                      </p>
                      {["React", "Node.JS", "PostgreSQL"].map((elem, idx) => {
                        return (
                          <Tag key={idx} closable={false}>
                            {elem}
                          </Tag>
                        );
                      })}
                      <div
                        className="links"
                        style={{
                          color: "#f8f8ff",
                          fontSize: "38px",
                          width: "40%",
                          display: "flex",
                          justifyContent: "space-around",
                          margin: "auto",
                          marginTop: "10px"
                        }}
                      >
                        <FaGithub />
                        <FaGlobeAfrica />
                      </div>
                    </BackSide>
                  </Flippy>
                </div>
              </div>
            </TabPane>

            <TabPane tab="Open-source Libraries" key="2">
              <div className="projects">
                <div className="project">
                  <Flippy
                    flipOnHover={true}
                    flipOnClick={false}
                    flipDirection="horizontal"
                  >
                    <FrontSide>
                      <h3>Consim</h3>
                      <img src="projects/JS.png" />
                    </FrontSide>
                    <BackSide style={{ color: "#f43517" }}>
                      <h3>Consim</h3>
                      <p style={{ color: "#f8f8ff" }}>
                        A utility for node.js and the browser which offers more
                        control over how asynchronous functions are invoked on
                        elements of an array.
                      </p>
                      {["Javascript"].map((elem, idx) => {
                        return (
                          <Tag key={idx} closable={false}>
                            {elem}
                          </Tag>
                        );
                      })}
                      <div
                        className="links"
                        style={{
                          color: "#f8f8ff",
                          fontSize: "38px",
                          width: "40%",
                          display: "flex",
                          justifyContent: "space-around",
                          margin: "auto",
                          marginTop: "10px"
                        }}
                      >
                        <FaGithub />
                        <FaGlobeAfrica />
                      </div>
                    </BackSide>
                  </Flippy>
                </div>
              </div>
            </TabPane>
          </Tabs>
          <img src="logo.png" alt="logo" width="200" height="200" />
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
          Hi there, I'm a Nigerian Fullstack Developer and I enjoy making things
          work. I primary build for the web using Javascript.
          <br />
          <br />
          Let's get in touch :)
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
    font-size: 35px;
    font-family: "Montserrat", sans-serif;
    /* margin-left: 150px; */
    /* letter-spacing: 8px; */
    text-align: center;
    color: #f8f8ff;

    @media ${mobilePortrait} {
      font-size: 20px;
    }
    @media ${tabletPortrait} {
      font-size: 22px;
    }
    @media ${smallLaptop} {
      font-size: 25px;
    }
    .horizontal {
      display: flex;
      justify-content: space-around;
      width: 50%;
      margin: auto;
    }
    .me {
      color: #f43517;
      font-family: "Montserrat", sans-serif;
      font-size: 50px;

      @media ${mobilePortrait} {
        font-size: 22px;
      }
      @media ${tabletPortrait} {
        font-size: 25px;
      }
      @media ${smallLaptop} {
        font-size: 30px;
      }
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

  .links {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    font-size: 30px;
    color: #f43517;
    align-items: center;
    margin-top: 100px;

    .email {
      color: #f43517;
      &:hover {
        opacity: 0.8;
      }
    }

    .socials {
      * {
        color: #f43517;
        margin-right: 30px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

const Projects = styled(Div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0;
  font-family: "Montserrat", sans-serif;

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
    height: 200px;
  }
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50px;
    justify-content: space-around;
  }
  .project {
    width: 45%;
    margin-bottom: 20px;
    color: #f43517;

    img {
      width: 300px;
    }
    h2 {
      color: #f43517;
      margin-top: 0;
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

    @media ${mobilePortrait} {
      font-size: 16px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .header {
    writing-mode: tb-rl;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    color: #f43517;
    @media ${mobilePortrait} {
      font-size: 16px;
    }
  }
  .content {
    width: 70%;
    font-family: "Montserrat", sans-serif;
    color: #f8f8ff;
    font-size: 30px;
    @media ${mobilePortrait} {
      font-size: 18px;
    }
  }

  .arrow {
    margin-top: 20px;
  }
`;

const Skills = styled(Div)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .chart {
    width: 60%;
    @media ${mobilePortrait} {
      height: 80%;
      font-size: 16px;
    }
  }
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media ${mobilePortrait} {
      font-size: 16px;
      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .header {
    writing-mode: tb-rl;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    color: #f43517;
    @media ${mobilePortrait} {
      font-size: 16px;
    }
  }
`;

export default Main;
