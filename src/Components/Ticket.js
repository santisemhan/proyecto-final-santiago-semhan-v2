import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button, Col, Row, Container } from "react-bootstrap";
import { addMore, addLess } from "../redux/actions/addTicket";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    minHeight: 770,
    margin: "00px 0% 20px 40%",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Ticket = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Ticket #000000000
        </Typography>
        <Typography variant="h5" component="h2">
          <strong>Productos </strong>seleccionados <ShoppingCartOutlinedIcon />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Este ticket es solo grafico, no sirve como ticket real
        </Typography>
        <Typography variant="body2" component="p" className="mt-5">
          {props.state.addTicket.items.map((item) => (
            <Container className="mt-2">
              <Row>
                <Col style={{ fontSize: "25px", fontWeight: "100" }}>
                  {item.nombre}
                </Col>
                <Col
                  style={{ fontSize: "25px", fontWeight: "100", left: "30%" }}
                >
                  <strong>${item.precio}</strong>
                </Col>
              </Row>
            </Container>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        {props.state.addTicket.precioFinal > 0 ? (
          <NavLink className="btn btn-block btn-success mt-5" to="/Compra">
            Finalizar Compra por ${props.state.addTicket.precioFinal}
          </NavLink>
        ) : (
          <h5 style={{ fontWeight: "350", margin: "00px 0% 20px 11%" }}>
            NINGUN PRODUCTO SELECCIONADO 😭
          </h5>
        )}
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addMore: () => {
      dispatch(addMore(props.props));
    },
    addLess: () => {
      dispatch(addLess(props.props));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
