import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Specialist from "../pages/Specialist";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/especialistas" element={<Specialist />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

