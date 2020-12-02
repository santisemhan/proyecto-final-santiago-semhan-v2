import React from "react";
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
import imagen from "../Images/dragon.jpg";
import { Button } from "react-bootstrap";
import { increment, decrement } from "./../redux/actions/counter";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ItemsCards = (props) => {
  const classes = useStyles();
  console.log(props);
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
        <IconButton
          id={props.props.id}
          color="inherit"
          onClick={() => props.increment()}
        >
          <ExpandLessIcon />
        </IconButton>
        <IconButton
          id={props.props.id}
          color="inherit"
          onClick={() => props.decrement()}
        >
          <ExpandMoreIcon />
        </IconButton>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <TextField
            disabled
            id={props.props.id}
            defaultValue="0"
            variant="outlined"
            size="small"
            value={props.counter}
          />
        </FormControl>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCards);
