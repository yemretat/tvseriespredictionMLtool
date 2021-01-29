/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../ui/Header";
import Grid from "@material-ui/core/Grid";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import * as common from "../../common";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function Confirm({
  prevStep,
  nextStep,
  currentCountry,
  currentCasts,
  currentCompanies,
  currentDirectors,
  currentProducers,
  currentDistributors,
  currentGenrees,
  currentKeywords,
  currentHarmfulContents,
  currentCertificate,
  setResponseData,
}) {
  const [fullJsonData, setFullJsonData] = useState({
    cast: currentCasts,
    companies: currentCompanies,
    directors: currentDirectors,
    producers: currentProducers,
    distributors: currentDistributors,
    genrees: currentGenrees,
    keywords: currentKeywords,
    harmfulcontents: currentHarmfulContents,
    certificate: currentCertificate,
  });
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpenError(false);

      return;
    }

    setOpenError(false);
  };
  const classes = useStyles();
  const backfunc = (e) => {
    e.preventDefault();
    prevStep();
  };
  const validate = () => {
    debugger;
    if (
      currentCountry.id != undefined &&
      currentCasts.length > 0 &&
      currentCompanies.length > 0 &&
      currentDirectors.length > 0 &&
      currentProducers.length > 0 &&
      currentDistributors.length > 0 &&
      currentGenrees.length > 0 &&
      currentKeywords.length > 0 &&
      currentCertificate.id != undefined
    ) {
      return true;
    } else {
      return false;
    }
  };
  let submitboolean = validate();

  const continueFunc = (e) => {
    e.preventDefault();
    /*  debugger;
    fetch("http://localhost:12345/predict", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullJsonData),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        debugger;
        console.log(error);
      }); */
    debugger;
    if (submitboolean) {
      setOpen(true);
      axios
        .post(common.urlflask, fullJsonData)

        .then(function (response) {
          debugger;
          console.log(response);
          setResponseData(response);
          debugger;
          nextStep();
        })
        .catch(function (error) {
          debugger;

          console.log(error);
        }); /* console.log(fullJsonData); */
    } else {
      setOpenError(true);
    }
  };

  return (
    <div>
      <Header></Header>
      <div
        className="listdeneme"
        style={{ marginBottom: "5vh", marginTop: "2vh" }}
      >
        <List>
          <ListItem>
            <ListItemText
              primary="Country"
              secondary={currentCountry.countryName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Casts"
              secondary={currentCasts.map((cast) => cast.name + "|")}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Companies"
              secondary={currentCompanies.map((company) => company.name + "|")}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Directors"
              secondary={currentDirectors.map(
                (director) => director.name + "|"
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Producers"
              secondary={currentProducers.map(
                (producer) => producer.name + "|"
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Distributors"
              secondary={currentDistributors.map(
                (distributor) => distributor.name + "|"
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Genrees"
              secondary={currentGenrees.map((genree) => genree.name + "|")}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Keywords"
              secondary={currentKeywords.map((keyword) => keyword.name + "|")}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="HarmfulContents"
              secondary={currentHarmfulContents.map(
                (keyword) => keyword.name + "|"
              )}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Certificate"
              secondary={currentCertificate.name}
            />
          </ListItem>
        </List>
      </div>
      <Grid container spacing={3}>
        {" "}
        <Grid item xs={6} style={{ textAlign: "center" }}>
          {" "}
          <input
            onClick={backfunc}
            class="buttoncontinue3"
            type="submit"
            value="Back..."
            name=""
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          {" "}
          <input
            onClick={continueFunc}
            class="buttonback3"
            type="submit"
            value="Confirm & Continue..."
            name=""
          />
        </Grid>
      </Grid>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
      </div>
      <div>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            Please fill all the fields.Harmful contents part are optional.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
