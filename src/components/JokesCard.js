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
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  card: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFE6CC",
    border: "solid Silver 1px"
  },
  cardHeader: {
    padding: "16px 16px",
    width: "40px"
  },
  cardTop: {
    display: "flex",
    justifyContent: "baseline",
    alignSelf: "baseline",
    marginLeft: "2%"
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
    marginBottom: "30px",
    fontSize: "1.1rem",
    color: "black"
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
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
  trashIcon: {
    fontSize: "2.5rem"
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
  const [isDeleted, setIsDeleted] = useState(false);

  console.log(isFavorited + " " + jokeID);

  console.log(didUserCreate);

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

  function deleteJoke() {
    axios
      .delete(`jokes/single/${jokeID}`)
      .then(res => {
        console.log("delete");
        setIsDeleted(true);
      })
      .catch(error => {
        console.log(error);
      });
  }

  console.log(didUserCreate);

  return (
    <div className={isDeleted ? classes.remove : null}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar aria-label="avatar name" className={classes.avatar}>
                {username !== undefined ? username[0] : null}
              </Avatar>
            }
          />
        </div>

        <CardContent className={classes.cardContent}>
          <h3>@{username}</h3>
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
            aria-label="Delete Joke"
            className={didUserCreate === true ? null : classes.remove}
          >
            <DeleteIcon className={classes.trashIcon} onClick={deleteJoke} />
          </IconButton>
          <IconButton
            className={isFavorite === true ? classes.redHeart : null}
            onClick={toggleFavorite}
            aria-label="add to favorites"
          >
            <FavoriteIcon className={classes.heartIcon} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default JokesCard;
