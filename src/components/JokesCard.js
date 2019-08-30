import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import MoodIcon from "@material-ui/icons/Mood";
// import MoodBadIcon from "@material-ui/icons/MoodBad";
// import CreateIcon from "@material-ui/icons/Create";
// import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  card: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  cardHeader: {
    padding: "16px 16px",
    width: "40px"
  },
  cardTop: {
    display: "flex",
    justifyContent: "baseline",
    alignSelf: "baseline"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    textAlign: "left",
    marginLeft: "2%",
    padding: "0"
  },
  jokeContent: {
    marginBottom: "15px"
  },
  cardActions: {
    alignSelf: "flex-end"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  redHeart: {
    color: "red"
  },
  heartIcon: {
    fontSize: "3rem"
  },
  remove: {
    display: "none"
  }
}));

function JokesCard({
  jokeID,
  didUserCreate,
  username,
  jokeSetup,
  jokePunchline,
  isFavorited
}) {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(isFavorited);

  console.log(isFavorited + " " + jokeID);

  useEffect(() => {
    setIsFavorite(isFavorited);
  }, [isFavorited]);

  function toggleFavorite() {
    axios
      .post(`favorites/toggle/${jokeID}`)
      .then(res => {
        if (res !== undefined) {
          console.log(res.data);
          setIsFavorite(res.data.isFavorite);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          {/* <IconButton
            aria-label="Delete Joke"
            className={didUserCreate ? null : classes.remove}
          >
            <DeleteIcon />
          </IconButton> */}
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar aria-label="avatar name" className={classes.avatar}>
                {username !== undefined ? username[0] : null}
              </Avatar>
            }
          />
          {/* <IconButton
            aria-label="Edit Joke"
            className={didUserCreate ? null : classes.remove}
          >
            <CreateIcon />
          </IconButton> */}
        </div>

        <CardContent className={classes.cardContent}>
          <h3>@{username}</h3>
          <Typography
            className={classes.jokeContent}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {jokeSetup}
          </Typography>
          <Typography
            className={classes.jokeContent}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {jokePunchline}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            className={isFavorite === true ? classes.redHeart : null}
            onClick={toggleFavorite}
            aria-label="add to favorites"
          >
            <FavoriteIcon className={classes.heartIcon} />
          </IconButton>
          {/* <IconButton aria-label="Like the joke">
            <MoodIcon />
          </IconButton>
          <IconButton aria-label="Dislike the joke">
            <MoodBadIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </div>
  );
}

export default JokesCard;
