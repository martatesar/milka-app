import React from "react";

import { AFrameScene } from "../helpers/aframe8thWallScene";
import html from "../../assets/ar/scene.html?raw";

const ARScene = () => {
  return <AFrameScene sceneHtml={html} />;
};

export default ARScene;
