/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../ui/Header";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import * as common from "../../common";
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11

export default function CountrySelect({
  changeCountry,
  nextStep,
  currentCountry,
  setCurrentCountry,
}) {
  const [countries, setCountries] = useState({});

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(common.uri + "Country/getall");

      setCountries(result.data);
      ///setIsLoading(false);
    };
    fetchItems();
  }, []);

  const continuefunc = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Grid direction="column" container>
      <Header />
      <br />
      <Autocomplete
        id="country-select-demo"
        style={{ marginBottom: "20vh", marginTop: "8vh" }}
        options={countries}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.countryName}
        onChange={(e, v) => setCurrentCountry(v)}
        renderOption={(option) => (
          <div>
            {option.countryName}
            {
              "                                                                     "
            }
            <img src={option.url} width="35px" height="35px"></img>
          </div>
        )}
        renderTags={(value, getTagProps) => {
          debugger;
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
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              style: { color: "orange" },
            }}
            className="TextField"
            label={
              currentCountry.countryName === undefined
                ? "Country"
                : currentCountry.countryName
            }
            variant="outlined"
            value={currentCountry.countryId}
            inputProps={{
              ...params.inputProps,

              autoComplete: "new-password",
              // disable autocomplete and autofill
            }}
          />
        )}
      />
      <br />
      <Grid container justify="center">
        <Grid item>
          {" "}
          <input
            onClick={continuefunc}
            class="buttoncontinue"
            type="submit"
            value="Continue..."
            name=""
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
