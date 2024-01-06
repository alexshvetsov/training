import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login.tsx";
import Home from "../../components/home/home.tsx";

const MainContent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default MainContent;
