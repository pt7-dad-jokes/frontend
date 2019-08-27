import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import JokesCard from "./JokesCard";
import axios from "axios";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  container: {
    display: "flex",
    justifyContent: "center"
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function ProfilePage({ username, jokesCreated }) {
  const [value, setValue] = useState(0);
  const [favoriteJokeData, setFavoriteJokeData] = useState([{}]);
  const [createdJokeData, setCreatedJokeData] = useState([{}]);

  const classes = useStyles();

  useEffect(() => {
    axios.get(`/favorites`).then(res => {
      console.log(res.data);
      setFavoriteJokeData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`/jokes/by_user`).then(res => {
      console.log(res.data);
      setCreatedJokeData(res.data);
    });
  }, []);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function showFavoriteJokes() {
    return Object.keys(favoriteJokeData[0]).length !== 0
      ? favoriteJokeData.map(jokeData => {
          return (
            <JokesCard
              didUserCreate={value === 0}
              jokeSetup={jokeData.setup}
              jokePunchline={jokeData.punchline}
            />
          );
        })
      : null;
  }
  function showCreatedJokes() {
    return Object.keys(createdJokeData[0]).length !== 0
      ? createdJokeData.map(jokeData => {
          return (
            <JokesCard
              didUserCreate={value === 0}
              jokeSetup={jokeData.setup}
              jokePunchline={jokeData.punchline}
            />
          );
        })
      : null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.profileContainer}>
        <Avatar className={classes.orangeAvatar}>{username[0]}</Avatar>
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Joke Wallet" />
            <Tab label="Favorites" />
          </Tabs>
        </Paper>
        <div>{value === 0 ? showCreatedJokes() : showFavoriteJokes()}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
