import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { useTransition, a } from "react-spring";
import styled from "styled-components";

const Loader = () => {
  const [finished, set] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, []);

  const props = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width }
  });

  return props.map(
    ({ item: finished, key, props: { opacity, width } }) =>
      !finished && (
        <Div>
          <a.div className="loading" key={key} style={{ opacity }}>
            <div className="loading-bar-container">
              <a.div className="loading-bar" style={{ width }} />
            </div>
          </a.div>
        </Div>
      )
  );
};

const Div = styled.div`
  .loading {
    z-index: 100;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: #171717;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loading-bar-container {
    width: 200px;
    height: 3px;
    background: #272727;
  }

  .loading-bar {
    height: 3px;
    background: white;
  }
`;

export default Loader;
