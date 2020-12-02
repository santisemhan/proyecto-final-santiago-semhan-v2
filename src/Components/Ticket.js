import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Button } from "react-bootstrap";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    minHeight: 770,
    margin: "00px 0% 20px 40%",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
        <Typography variant="body2" component="p">
          ACA LOS PRODUCTOS SELECCIONADOS
        </Typography>
      </CardContent>
      <CardActions className="mt-5">
        <Button className="btn btn-block btn-success mt-5">
          Finalizar Compra por $300
        </Button>
      </CardActions>
    </Card>
  );
}
