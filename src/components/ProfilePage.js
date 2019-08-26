import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import JokesCard from "./JokesCard";

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
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  function handleChange(event, newValue) {
    console.log("Changing");
    setValue(newValue);
  }

  function showFavoriteJokes() {
    return favoriteJokePlaceholder.map(jokeData => {
      return (
        <JokesCard
          onProfilePage={true}
          username={jokeData.username}
          jokeSetup={jokeData.setup}
          jokePunchline={jokeData.punchline}
        />
      );
    });
  }

  //This is placeholder joke data to get functionality working
  let favoriteJokePlaceholder = [
    {
      username: "Cody",
      setup: "Knock knock",
      punchline: "This is a placeholder joke don't open the door."
    },
    {
      username: "AJ",
      setup: "Knock knock",
      punchline: "This is a placeholder joke don't open the door."
    },
    {
      username: "Josh",
      setup: "Knock knock",
      punchline: "This is a placeholder joke don't open the door."
    },
    {
      username: "Andre",
      setup: "Knock knock",
      punchline: "This is a placeholder joke don't open the door."
    }
  ];

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
            {/* <Tab label="My Created Jokes" /> */}
            <Tab label="My Favorited Jokes" />
          </Tabs>
        </Paper>
        <div>{showFavoriteJokes()}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
