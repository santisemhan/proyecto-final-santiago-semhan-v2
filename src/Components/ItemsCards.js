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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ItemsCards = (props) => {
  console.log(props.props.nombre);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagen}
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
        <IconButton color="inherit">
          <ExpandLessIcon />
        </IconButton>
        <IconButton color="inherit">
          <ExpandMoreIcon />
        </IconButton>
        <FormControl fullWidth className={classes.margin} variant="filled">
          <TextField
            disabled
            id="outlined-disabled"
            defaultValue="$"
            variant="outlined"
            size="small"
          />
        </FormControl>
      </CardActions>
    </Card>
  );
};

export default ItemsCards;
