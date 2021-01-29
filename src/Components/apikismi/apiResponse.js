import React from "react";
import Grid from "@material-ui/core/Grid";

const ApiResponse = ({ resultApiData, prevStep2 }) => {
  const backfunc = (e) => {
    e.preventDefault();
    prevStep2();
  };
  return (
    <div>
      <Grid container justify="center">
        <Grid item>
          <input
            onClick={backfunc}
            class="buttoncontinuee"
            type="submit"
            value="Back"
          ></input>
        </Grid>
      </Grid>
      <pre>{JSON.stringify(resultApiData, null, 2)}</pre>
    </div>
  );
};

export default ApiResponse;
