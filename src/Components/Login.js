import React, { useState } from "react";
import {
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import "fontsource-roboto";
import "../Styles/Login.css";
import toastr from "toastr";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(0);
  const [triggerUsuario, setTriggerUsuario] = useState(0);

  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(4),
      },
    },
  }));

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
      email: "user@user.com",
      password: "123",
    };

    if (
      emailInput == hardcodedCred.email &&
      passwordInput == hardcodedCred.password
    ) {
      const token = "123456abcdef";
      sessionStorage.setItem("auth-token", token);
      history.push("/Home");
    } else {
      setError(1);
    }
  };

  const mostrarUsuarioValido = () => {
    setError(0);
    setTriggerUsuario(1);
  };

  const classes = useStyles();

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
                <form onSubmit={handleLoginSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="email"
                        label="Email"
                        fullWidth
                        name="username"
                        //required
                        autoFocus
                        value={emailInput}
                        onChange={handleEmailChange}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        name="password"
                        required
                        value={passwordInput}
                        onChange={handlePasswordChange}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        className="btn btn-primary btn-sm btn-block mt-3"
                        type="submit"
                      >
                        <strong>ENTRAR</strong>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Link
                        href="#"
                        variant="body2"
                        onClick={mostrarUsuarioValido}
                      >
                        No tienes usuario?
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              {triggerUsuario === 1 ? (
                <div className={classes.root}>
                  <Alert variant="filled" severity="success">
                    Email: user@user.com Password: 123
                  </Alert>
                </div>
              ) : (
                <p></p>
              )}
              {error === 1 ? (
                <div className="mt-3">
                  <div className={classes.root}>
                    <Alert variant="filled" severity="error">
                      Usuario y/o contraseña erronea
                    </Alert>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
