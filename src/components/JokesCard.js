import React from "react";
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
import ShareIcon from "@material-ui/icons/Share";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    flexDirection: "column",
    display: "flex",
    alignItems: "center"
  },
  cardHeader: {
    padding: "16px 0px",
    width: "40px"
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%"
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
  }
}));

function JokesCard({ onProfilePage, username, jokeSetup, jokePunchline }) {
  const classes = useStyles();
  console.log(username);
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <IconButton aria-label="share">
            <DeleteIcon />
          </IconButton>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {username[0]}
              </Avatar>
            }
          />
          <IconButton aria-label="share">
            <CreateIcon />
          </IconButton>
        </div>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {jokeSetup}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jokePunchline}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <MoodIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <MoodBadIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default JokesCard;
