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
import imagen from "../Images/dragon.jpg";
import { Button } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ItemsCards = (props) => {
  const [counter, setCounter] = useState(0);
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
          onClick={() => setCounter(counter + 1)}
        >
          <ExpandLessIcon />
        </IconButton>
        <IconButton
          id={props.props.id}
          color="inherit"
          onClick={() => setCounter(counter - 1)}
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
            value={counter}
          />
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default ItemsCards;
