import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import AddJokeButton from "./AddJokeButton";
import SignoutButton from "./SignOutButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const BorderDiv = styled.div`
  border-bottom: 2px solid teal;
`;

// const IconDiv = styled.div`
//     padding-top 5px;
// `;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
    width: "20%"
  },
  tabs: {
    width: "100%",
    marginTop: "70px"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={!`value`}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <BorderDiv>
          <NavLink to={`/`} style={{ textDecoration: "none" }}>
            <Tab
              label={
                <div
                  style={{
                    fontSize: "1.2rem",
                    color: "black"
                  }}
                >
                  <HomeIcon
                    style={{
                      display: "inline-block",
                      marginBottom: "-8px",
                      color: "black",
                      fontSize: "2.75rem"
                    }}
                  />
                  Home
                </div>
              }
              {...a11yProps(2)}
            />
          </NavLink>
        </BorderDiv>
        <BorderDiv>
          <NavLink to={`/auth/accounts`} style={{ textDecoration: "none" }}>
            <Tab
              label="Profile"
              {...a11yProps(1)}
              style={{
                fontSize: "1.2rem",
                color: "black"
              }}
            />{" "}
          </NavLink>
        </BorderDiv>
        {/* <Link to={`/jokes`}> */}
        <AddJokeButton />
        {/* </Link> */}
        <NavLink to={`/signedout`}>
          <SignoutButton />
        </NavLink>
      </Tabs>
    </div>
  );
}
