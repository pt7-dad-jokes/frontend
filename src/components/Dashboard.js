import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import JokesCard from "./JokesCard";
import TopBar from "./TopBar";
import VerticalNav from "./VerticalNav";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  dashboardContainer: {
    display: "flex"
  },
  jokesContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    marginTop: "15px"
  }
}));

function Dashboard() {
  const classes = useStyles();

  // 3 form states login, forgotPassword and signup
  const [publicJokeData, setPublicJokeData] = useState([{}]);

  useEffect(() => {
    axios
      .get(`/jokes`)
      .then(res => {
        if (res !== undefined) {
          console.log(res.data);
          setPublicJokeData(res.data);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function showPublicJokes() {
    return publicJokeData.map(jokeData => {
      return (
        <JokesCard
          jokeID={jokeData.id}
          username={jokeData.creator}
          didUserCreate={false}
          jokeSetup={jokeData.setup}
          jokePunchline={jokeData.punchline}
          isFavorited={jokeData.isFavorite}
        />
      );
    });
  }

  return (
    <div>
      <TopBar />
      <div className={classes.dashboardContainer}>
        <VerticalNav />
        <div className={classes.jokesContainer}>{showPublicJokes()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
