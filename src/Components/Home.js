import React from "react";
import NavBar from "../Layout/NavBar";
import Items from "./Items";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  if (!sessionStorage.getItem("auth-token")) {
    console.log("no auth token set");
    history.push("");
  } else {
    const authToken = "123456abcdef";
    if (sessionStorage.getItem("auth-token") === authToken) {
      console.log("good token. Log in.");
    } else {
      console.log("bad token.");
      history.push("");
    }
  }
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
          minHeight: "100vh",
          backgroundSize: "cover",
        }}
      >
        <NavBar />
        <Items />
      </div>
    </>
  );
};

export default Home;
