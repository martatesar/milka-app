import React from "react";

import { AFrameScene } from "../helpers/aframe8thWallScene";
import html from "../../assets/ar/scene.html?raw";
import testComponent from "../aframe-components/test-component";

const ARScene = () => {
  return <AFrameScene sceneHtml={html} components={[testComponent]} />;
};

export default ARScene;
