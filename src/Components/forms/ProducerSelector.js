/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Header from "../ui/Header";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Producer({
  prevStep,
  nextStep,
  countryProducers,
  changeCurrentProducers,
  currentProducers,
  setCurrentProducers,
}) {
  const classes = useStyles();
  const backfunc = (e) => {
    e.preventDefault();
    prevStep();
  };
  const continueFunc = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <Header></Header>
      <Autocomplete
        multiple
        style={{ marginBottom: "23vh", marginTop: "8vh" }}
        options={countryProducers}
        defaultValue={currentProducers}
        filterSelectedOptions="true"
        getOptionLabel={(countryProducers) => {
          //          debugger;
          return countryProducers.name === undefined
            ? "anan"
            : countryProducers.name;
        }}
        renderOption={(option) => (
          <div className="anan1" onClick={() => changeCurrentProducers(option)}>
            {option.name}
          </div>
        )}
        // defaultValue={[countryCasts[13]]}
        renderInput={(params) => (
          <TextField
            className="haticeebem"
            /// classes={{loading: }
            {...params}
            variant="standard"
            label="Producers"
            placeholder="Select the Producers"
          />
        )}
        renderTags={(value, getTagProps) => {
          setCurrentProducers(value);
          return value.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              variant="outlined"
              key={option.id}
              label={option.name}
              style={{ backgroundColor: "#f4be6a" }}
              color="primary"
              //       onDelete={() => console.log("test")}
            />
          ));
        }}
      />
      <Grid container>
        {" "}
        <Grid item xs={6} style={{ textAlign: "center" }}>
          {" "}
          <input
            onClick={backfunc}
            class="buttoncontinue2"
            type="submit"
            value="Back..."
            name=""
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          {" "}
          <input
            onClick={continueFunc}
            class="buttonback2"
            type="submit"
            value="Continue..."
            name=""
          />
        </Grid>
      </Grid>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
