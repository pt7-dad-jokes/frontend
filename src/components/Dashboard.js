import React, { useState, useEffect } from "react";
import JokesCard from "./JokesCard";
import axios from "axios";

function Dashboard() {
  // 3 form states login, forgotPassword and signup
  const [publicJokeData, setPublicJokeData] = useState([{}]);

  useEffect(() => {
    axios.get(`/jokes`).then(res => {
      console.log(res.data);
      setPublicJokeData(res.data);
    });
  }, []);

  function showPublicJokes() {
    return publicJokeData.map(jokeData => {
      return (
        <JokesCard
          username={jokeData.creator}
          didUserCreate={false}
          jokeSetup={jokeData.setup}
          jokePunchline={jokeData.punchline}
        />
      );
    });
  }

  return <div>{showPublicJokes}</div>;
}

export default Dashboard;
