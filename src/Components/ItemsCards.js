import React, { useState } from "react";
import {
  IconButton,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  CardMedia,
  Typography,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "react-bootstrap";
import {
  AddMoreToTicket,
  AddLessToTicket,
  addMore,
  addLess,
  deleteAll,
} from "../redux/actions/addTicket";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  media: {
    height: 140,
  },
});

const ItemsCards = (props) => {
  const addToTicket = (e) => {
    props.addMore();
  };
  const lessToTicket = (e) => {
    props.addLess();
  };
  const deleteAll = (e) => {
    props.deleteAll();
  };
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.props.urlImagen}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.props.nombre}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A SOLO ${props.props.precio} (Pesos Argentinos)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton id={props.props.id} color="inherit" onClick={addToTicket}>
          <ExpandLessIcon />
        </IconButton>
        <IconButton id={props.props.id} color="inherit" onClick={lessToTicket}>
          <ExpandMoreIcon />
        </IconButton>
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
    deleteAll: () => {
      dispatch(deleteAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCards);
