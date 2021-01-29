import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  appbar: {
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  flexContainer: { display: "flex", flexDirection: "row", padding: 0 },
  listitem: {
    padding: 0,
    width: "30%",
    borderRight: "1px solid rgba(255,255,255,0.2)",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.appbar}>
          <List className={classes.flexContainer}>
            <ListItem className={classes.listitem}>
              <Link className="linkappbar" to="/">
                Home
              </Link>
            </ListItem>
            <ListItem className={classes.listitem}>
              <Link className="linkappbar" to="/about">
                About
              </Link>
            </ListItem>
            <ListItem className={classes.listitem}>
              <Link className="linkappbar" to="/ApiService">
                Api Services
              </Link>
            </ListItem>
            <ListItem className={classes.listitem}>
              <Link className="linkappbar" to="7contact">
                Contact
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}
