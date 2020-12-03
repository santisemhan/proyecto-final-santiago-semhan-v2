import React from "react";
import { Button, Card, CardImg, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const moment = require("moment");

const Personaje = ({
  id,
  name,
  image,
  status,
  species,
  gender,
  created,
  goBack = false,
}) => {
  return (
    <Col xs={4} className="mb-2" key={id}>
      <Card>
        <CardImg src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {status === "Alive" ? "Vivo" : "Muerto"} - {gender} - {species}
          </Card.Text>
          <Card.Text>
            Fecha de nacimiento: {moment(created).format("YYYY-MM-DD")}
          </Card.Text>
          <Link to={goBack ? "/personajes" : `/personaje/${id}`}>
            <Button block>
              {goBack ? "Volver" : "Informacion del Empleado"}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Personaje;
