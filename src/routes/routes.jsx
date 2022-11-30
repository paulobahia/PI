import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Specialist from "../pages/Specialist";
import Login from "../pages/Login"
import Signin from "../pages/Signin"
import Form from "../pages/Form"

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
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

