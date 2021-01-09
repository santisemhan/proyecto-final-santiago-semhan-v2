import React from "react";
import {
  IconButton,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { addMore, addLess, deleteAll } from "../redux/actions/addTicket";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

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
        <IconButton
          aria-label="delete"
          variant="inherit"
          startIcon={<DeleteIcon />}
          onClick={() => {
            props.deleteItem(props.props.id);
          }}
          style={{ color: "#525252" }}
        >
          <DeleteIcon />
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
