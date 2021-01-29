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

export default function DistributorSelector({
  prevStep,
  nextStep,
  changeCurrentGenrees,
  countryGenrees,
  setCurrentGenrees,
  currentGenrees,
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
        style={{ marginBottom: "23vh", marginTop: "8vh" }}
        multiple
        id="tags-standard"
        options={countryGenrees}
        defaultValue={currentGenrees}
        filterSelectedOptions="true"
        getOptionLabel={(countryGenrees) => {
          //          debugger;
          return countryGenrees.name === undefined
            ? "anan"
            : countryGenrees.name;
        }}
        renderOption={(option) => <div className="anan1">{option.name}</div>}
        renderTags={(value, getTagProps) => {
          //   debugger;
          setCurrentGenrees(value);
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
        // defaultValue={[countryCasts[13]]}
        renderInput={(params) => (
          <TextField
            className="haticeebem"
            /// classes={{loading: }
            {...params}
            variant="standard"
            label="Genrees"
            placeholder="Select the Genrees"
          />
        )}
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
