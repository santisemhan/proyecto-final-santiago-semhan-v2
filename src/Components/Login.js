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
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "fontsource-roboto";
import "../Styles/Login.css";

const Login = () => {
  return (
    <div
      className="main-login"
      style={{
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(115,194,209,1) 48%, rgba(0,212,255,1) 100%)",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  Iniciar Sesion
                </Typography>
              </Grid>
              <Grid item style={{ padding: "20px" }}>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="email"
                        label="Email"
                        fullWidth
                        name="username"
                        //required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        name="password"
                        //required
                      />
                    </Grid>
                    <Grid item>
                      <NavLink
                        className="btn btn-primary btn-sm btn-block mt-3"
                        to="/Home"
                        type="submit"
                      >
                        <strong>ENTRAR</strong>
                      </NavLink>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
