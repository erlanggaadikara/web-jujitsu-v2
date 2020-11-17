import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0ec06",
    height: "100vh",
  },
  rootSquare: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 250,
    backgroundColor: "black",
    "& h2": {
      fontWeight: "bold",
      color: " white",
    },
  },
  squareContent: {
    display: "flex",
    flexDirection: "row",
  },
  line: {
    backgroundColor: "white",
    width: 70,
    height: 2,
    margin: "10px 8px",
  },
  line2: {
    backgroundColor: "white",
    width: 65,
    height: 2,
    margin: "10px 8px",
  },
  text: {
    color: " white",
  },
});

const Homes = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root}>
      <div className={classes.rootSquare}>
        <div className={classes.squareContent}>
          <div className={classes.line}></div>
          <div className={classes.text}>Institut Jujitsu Indonesia</div>
          <div className={classes.line}></div>
        </div>
        <h2>UKM Jujitsu Honeybadger</h2>
        <div className={classes.squareContent}>
          <div className={classes.line2}></div>
          <div className={classes.text}>UPN "Veteran" Jawa Timur</div>
          <div className={classes.line2}></div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
