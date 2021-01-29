import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export const Isimgirme = ({
  changeCurrentName,
  prevStep,
  currentName,
  nextStep,
}) => {
  const handleChange = (input) => (e) => {
    changeCurrentName(e.target.value);

    const backfunc = (e) => {
      e.preventDefault();
      prevStep();
    };
  };
  const backfunc = (e) => {
    e.preventDefault();
    prevStep();
  };
  const continueFunc = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <TextField
          placeholder="Enter Your Occupation"
          label="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={currentName}
          margin="normal"
          fullWidth
        />
        <Grid container spacing={3}>
          {" "}
          <Grid item xs={6}>
            {" "}
            <input
              onClick={backfunc}
              class="buttoncontinue2"
              type="submit"
              value="Back..."
              name=""
            />
          </Grid>
          <Grid item xs={6}>
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
      </React.Fragment>
    </MuiThemeProvider>
  );
};
