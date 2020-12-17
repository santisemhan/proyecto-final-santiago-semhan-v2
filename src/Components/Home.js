import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "../Layout/NavBar";
import Items from "./Items";

const Home = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Items />
      </div>
    </>
  );
};

export default Home;
