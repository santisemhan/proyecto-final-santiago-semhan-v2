import React from "react";
import { AppBar, Typography, Tabs, Tab, Box } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import BathtubIcon from "@material-ui/icons/Bathtub";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import ItemsCards from "./ItemsCards";

import { Col, Container, Row } from "react-bootstrap";

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
    position: "absolute",
    left: "45%",
    padding: "5%",
  },
}));

const ItemsTable = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            <Col>
              <ItemsCards />
            </Col>
            <Col>
              <ItemsCards />
            </Col>
            <Col>
              <ItemsCards />
            </Col>
            <Col>
              <ItemsCards />
            </Col>
            <Col>
              <ItemsCards />
            </Col>
          </Row>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
};

export default ItemsTable;
