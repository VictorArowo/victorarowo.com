import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Main from "./components/Main";
import styled from "styled-components";
import { extend } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas } from "react-three-fiber";
import Controls from "./components/Controls";
import Model from "./components/Model";
import Loader from "./components/Loader";

extend({ OrbitControls });

function App() {
  return (
    <>
      <Div className="App">
        <Canvas camera={{ position: [0, 0, 15] }} shadowMap>
          <ambientLight intensity={1.5} />
          <pointLight intensity={2} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={1.25}
            angle={Math.PI / 8}
            position={[25, 25, 15]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <Controls
            autoRotate
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.5}
            rotateSpeed={1.5}
          />
          <Model />
        </Canvas>
        <Main className="main" />
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: #5a5d94;
  z-index: -1;
  .main {
    display: fixed;
    border: 2px solid red;
  }
`;

export default App;
