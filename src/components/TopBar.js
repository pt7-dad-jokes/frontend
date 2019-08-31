import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  topBar: {
    backgroundColor: "#FF9E47",
    marginTop: "-30px",
    color: "white",
    fontFamily: "'Gloria Hallelujah', cursive",
    fontSize: "1.5rem"
  }
}));

function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.topBar}>
      <h2 style={{ marginBottom: "0" }}>HI HUNGRY, I'M DAD!</h2>
    </div>
  );
}

export default TopBar;
