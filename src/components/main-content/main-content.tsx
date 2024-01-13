import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login.tsx";
import Home from "../../components/home/home.tsx";
import Players from "../../pages/players/players.tsx";
import classes from "./main-content.module.scss";

const MainContent = () => {
  return (
    <main className={classes.main_content}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </main>
  );
};

export default MainContent;
