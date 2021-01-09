import React from "react";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

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
              href="/Home"
            >
              <NavLink className="btn btn-primary btn-sm" to="/Home">
                <ShoppingCartOutlinedIcon />
              </NavLink>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Mercado React
            </Typography>
            <NavLink className="btn btn-success btn-sm mr-2" to="/Empleados">
              <strong>
                NUESTROS EMPLEADOS <PeopleAltIcon />
              </strong>
            </NavLink>
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
