import React, { useRef } from "react";
import { useThree, useRender } from "react-three-fiber";

const Controls = props => {
  const { gl, camera } = useThree();
  const ref = useRef();
  useRender(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

export default Controls;
