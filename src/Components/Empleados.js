import React, { useEffect, useState } from "react";
import Empleado from "./Empleado";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import NavBar from "../Layout/NavBar";

export default function PersonajesPage() {
  //Refs
  const baseUrl = "https://rickandmortyapi.com/api";
  const [personajes, setPersonajes] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/character/`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
        setFetching(false);
      })
      .catch((e) => setError(true));
  }, []);

  return (
    <>
      <div
        style={{
          background: "rgb(2,0,36)",
          background:
            "linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(115,194,209,1) 48%, rgba(0,212,255,1) 100%)",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Container>
          <Row className="mt-5">
            {personajes.map((personaje) => (
              <Empleado {...personaje} key={personaje.id} />
            ))}
          </Row>
          {fetching && <Spinner animation="grow" variant="dark" />}
        </Container>
      </div>
    </>
  );
}
