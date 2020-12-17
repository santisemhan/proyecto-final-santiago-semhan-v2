import React from "react";
import NavBar from "../Layout/NavBar";
import EstadisticasCompra from "../Common/EstadisticasCompra";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Col, Row, Container, Image } from "react-bootstrap";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, green } from "@material-ui/core/colors";
import { connect } from "react-redux";
import { addMore, addLess, deleteAll } from "../redux/actions/addTicket";
import "../Styles/Compra.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: "0px 70% 0px 0%",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  divAviso: {
    margin: "9% 13% 0%",
    marginLeft: "60%",
  },
  rootDos: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  rounded: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));

const Compra = (props) => {
  const deleteAll = (e) => {
    props.deleteAll();
  };
  const classes = useStyles();
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <div>
          <EstadisticasCompra />
        </div>
        <div className={classes.divAviso}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Todo en orden!
              </Typography>
              <Typography variant="h5" component="h2">
                Compra realizada correctamente {"  "}
                <DoneIcon />
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Este ticket es solo grafico, no sirve como ticket real
              </Typography>
              <Typography variant="body2" component="p" className="mt-4">
                <Image
                  src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-14.png"
                  style={{
                    width: "10%",
                    height: "10%",
                    paddingRight: "3px",
                    marginRight: "10px",
                  }}
                />
                <strong>
                  ***2354 por ${props.state.addTicket.precioFinal} (pesos
                  argentinos)
                </strong>
              </Typography>
            </CardContent>
            <CardActions className="cardMargin">
              <NavLink
                className="btn btn-success"
                to="/Home"
                onClick={deleteAll}
              >
                Realizar otra compra!
              </NavLink>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
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
    deleteAll: () => {
      dispatch(deleteAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Compra);
