import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Mercado React
            </Typography>
            <NavLink className="btn btn-primary btn-sm" to="/">
              <strong>CERRAR SESION</strong>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
