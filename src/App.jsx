import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import ARPage from "./pages/ar/ARPage";
import ThreeSixtyPage from "./pages/360/360Page";
import HomePage from "./pages/home/HomePage";

const App = () => (
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/ar" element={<ARPage />} />
      <Route exact path="/360" element={<ThreeSixtyPage />} />
      <Route
        path="*"
        element={
          <div>
            <h1>404</h1>
          </div>
        }
      />
    </Routes>
  </HashRouter>
);

export default App;
