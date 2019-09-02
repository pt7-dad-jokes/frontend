import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Styles/ProfilePage.css";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import JokesCard from "./JokesCard";
import TopBar from "./TopBar";
import axios from "axios";
import VerticalNav from "./VerticalNav";

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
    height: "100%"
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row"
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%"
  },
  tabButton: {
    maxWidth: "50%",
    minWidth: "50%",
    fontSize: "1.25rem",
    color: "black"
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
              jokeID={jokeData.id}
              username={jokeData.creator}
              didUserCreate={false}
              jokeSetup={jokeData.setup}
              jokePunchline={jokeData.punchline}
              isFavorited={true}
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
              jokeID={jokeData.id}
              username={jokeData.creator}
              didUserCreate={false}
              jokeSetup={jokeData.setup}
              jokePunchline={jokeData.punchline}
              isFavorited={false}
            />
          );
        })
      : null;
  }

  return (
    <div>
      <TopBar />
      <div
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "10px"}}
      ></div>
      <div className={classes.container}>
        <div className={classes.profileContainer}>
          <VerticalNav />
          <div className={classes.categoryContainer}>
            <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Joke Wallet" className={classes.tabButton} />
                <Tab label="Favorites" className={classes.tabButton} />
              </Tabs>
            </Paper>
            <div>{value === 0 ? showCreatedJokes() : showFavoriteJokes()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
