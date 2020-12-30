import React, { useState } from "react";
import { AppBar, Typography, Tabs, Tab, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import BathtubIcon from "@material-ui/icons/Bathtub";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import ItemsCards from "./ItemsCards";
import { Col, Container, Row } from "react-bootstrap";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    minWidth: 720,
    right: "-20%",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
    margin: "00px 0% 20px -40%",
  },
}));

const ItemsTable = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="COMIDA" icon={<FastfoodIcon />} {...a11yProps(0)} />
            <Tab label="BEBIDA" icon={<LocalDrinkIcon />} {...a11yProps(1)} />
            <Tab label="ROPA" icon={<EmojiPeopleIcon />} {...a11yProps(2)} />
            <Tab label="LIMPIEZA" icon={<BathtubIcon />} {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Container>
            <Row>
              {props.items.length > 0 ? (
                props.items
                  .filter((item) => item.categoria == 1)
                  .map((item) => (
                    <Col id={item.id}>
                      <ItemsCards id={item.id} props={item} />
                    </Col>
                  ))
              ) : (
                <tr>
                  <td colSpan={3}>No hay productos en la lista</td>
                </tr>
              )}
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container>
            <Row>
              {props.items.length > 0 ? (
                props.items
                  .filter((item) => item.categoria == 3)
                  .map((item) => (
                    <Col id={item.id}>
                      <ItemsCards id={item.id} props={item} />
                    </Col>
                  ))
              ) : (
                <tr>
                  <td colSpan={3}>No hay productos en la lista</td>
                </tr>
              )}
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container>
            <Row>
              {props.items.length > 0 ? (
                props.items
                  .filter((item) => item.categoria == 2)
                  .map((item) => (
                    <Col id={item.id}>
                      <ItemsCards id={item.id} props={item} />
                    </Col>
                  ))
              ) : (
                <tr>
                  <td colSpan={3}>No hay productos en la lista</td>
                </tr>
              )}
            </Row>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Container>
            <Row>
              {props.items.length > 0 ? (
                props.items
                  .filter((item) => item.categoria == 0)
                  .map((item) => (
                    <Col id={item.id}>
                      <ItemsCards id={item.id} props={item} />
                    </Col>
                  ))
              ) : (
                <tr>
                  <td colSpan={3}>No hay productos en la lista</td>
                </tr>
              )}
            </Row>
          </Container>
        </TabPanel>
        <div style={{ marginLeft: "45%" }}>
          <IconButton
            aria-label="delete"
            className={classes.margin}
            onClick={() => {
              props.agregandoItem(true);
            }}
            color="default"
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </Container>
  );
};

export default ItemsTable;
