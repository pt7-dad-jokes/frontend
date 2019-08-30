import React, { useState, useEffect } from "react";
import JokesCard from "./JokesCard";
import TopBar from "./TopBar";
import VerticalNav from "./VerticalNav";
import axios from "axios";

function Dashboard() {
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
      <div>
        <TopBar></TopBar>
        <VerticalNav />
      </div>
      {showPublicJokes()}
    </div>
  );
}

export default Dashboard;
