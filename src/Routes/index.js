import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import Scroll from "../Components/Scroll";
import UseCallBackExample from "../Components/UseCallBackExample";
import NotFoundPage from "../Components/NotFoundPage";
import Count from "../Components/Count";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute element={<Scroll />} />} />
        <Route path="/count" element={<PublicRoute element={<Count />} />} />
        <Route
          path="/home"
          element={<PrivateRoute element={<UseCallBackExample />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
