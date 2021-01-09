import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const moment = require("moment");

const useStyles = makeStyles({
  root: {
    maxWidth: 352,
    margin: 10,
  },
  media: {
    height: 352,
  },
});

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
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="imagen_empleado"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              component="p"
              display="block"
            >
              {status === "Alive" ? "Vivo" : "Muerto"} - {gender} - {species} -
              Fecha de nacimiento: {moment(created).format("YYYY-MM-DD")}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Personaje;
