import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@font-face": {
    fontFamily: "Kimberley",
    src: "url(https://fonts.googleapis.com/css?family=Manjari&display=swap)"
  },
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
      <h2>HI HUNGRY, I'M DAD!</h2>
    </div>
  );
}

export default TopBar;
