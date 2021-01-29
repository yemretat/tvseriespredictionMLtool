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

export default function Casts({
  countryCasts,
  changeCurrentCast,
  currentCasts,
  setCurrentCast,
  prevStep,
  nextStep,
  currentCountry,
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
        ChipProps={{
          classes: {
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
          },
        }}
        fullWidth={true}
        multiple
        id="tags-standard"
        options={countryCasts}
        noOptionsText="No Options!"
        filterSelectedOptions="true"
        getOptionLabel={(countryCasts) => {
          //          debugger;
          return countryCasts.name === undefined ? "none" : countryCasts.name;
        }}
        renderOption={(option) => (
          <div className="anan1">
            {" "}
            {/*onClick={() => changeCurrentCast(option)*/}
            {option.name}
            <img
              className="castimage"
              src={option.url}
              width="35px"
              height="35px"
            ></img>
          </div>
        )}
        renderTags={(value, getTagProps) => {
          //   debugger;
          setCurrentCast(value);
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
            /// classes={{loading: }
            {...params}
            variant="standard"
            label="Cast"
            placeholder="Select the Cast"
          />
        )}
        defaultValue={currentCasts}
      />
      <Grid container direction="row">
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
