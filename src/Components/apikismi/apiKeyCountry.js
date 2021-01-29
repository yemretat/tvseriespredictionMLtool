/* eslint-disable no-use-before-define */
import React, { useEffect, useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Header from "../ui/Header";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import { FormControl, FormLabel, responsiveFontSizes } from "@material-ui/core";
import * as common from "../../common";

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginTop: "100px",
  },
  formlabel: {
    marginBottom: "5vh",
    fontSize: "large",
    color: "#3f51b5",
    fontWeight: "bold",
  },
  outlinedInput: {
    "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.text.primary,
    },
    "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  },
}));
export default function ApiKey({
  prevStep2,
  nextStep2,
  currentCountry,
  setCurrentCountry,
  setCurrentApiType,
  currentApiType,
  setCurrentApiMethods,
  currentApiMethods,
  setResultApiData,
}) {
  const [countries, setCountries] = useState({});
  const [apiTypes, setCountryApiType] = useState([]);
  const [apiMethodTypes, setApiMethodTypes] = useState([]);
  const classes = useStyles();
  const backfunc = (e) => {
    e.preventDefault();
    prevStep2();
  };
  const continueFunc = (e) => {
    e.preventDefault();
    nextStep2();
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(common.uri + "Country/getall");

      setCountries(result.data);
      ///setIsLoading(false);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentCountry.id !== undefined) {
        let url = common.uri + "ApiType/getApiTypebyCountryId";
        url += "?countryId=" + currentCountry.id;
        const result = await axios(url);
        debugger;
        setCountryApiType(result.data);
      }
    };
    fetchItems();
  }, [currentCountry]);

  useEffect(() => {
    const fetchItems = async () => {
      if (currentApiType.id !== undefined) {
        let url = common.uri + "ApiTypeMethod/getapiTypelistbycategory";
        url += "?countryId=" + currentApiType.id;
        const result = await axios(url);
        setApiMethodTypes(result.data);
      }
    };
    fetchItems();
  }, [currentApiType, currentApiMethods]);

  useEffect(() => {
    const fetchItems = async () => {
      if (
        currentCountry.id !== undefined &&
        currentApiType.id !== undefined &&
        currentApiMethods.id !== undefined
      ) {
        let url = common.uri + "";
        debugger;
        url +=
          currentApiType.apiName.trim() +
          "/" +
          currentApiMethods.apiName.trim();
        url += currentCountry.id;
        const result = await axios(url);
        debugger;
        setResultApiData(result.data);
      }
    };
    fetchItems();
  }, [currentApiType, currentApiMethods, currentCountry]);

  return (
    <div style={{ marginTop: "15vmin" }}>
      <FormLabel className={classes.formlabel}>Country Select</FormLabel>
      <Autocomplete
        id="country-select-demo"
        style={{ marginBottom: "5vmin" }}
        options={countries}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.countryName}
        onChange={(e, v) => setCurrentCountry(v)}
        renderOption={(option) => (
          <div className="anan1">
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
      <FormLabel className={classes.formlabel}>
        Which data do you want?
      </FormLabel>
      <Autocomplete
        id="country-select-demo"
        style={{ marginBottom: "5vmin" }}
        options={apiTypes}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.dropBoxName}
        onChange={(e, v) => setCurrentApiType(v)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              style: { color: "orange" },
            }}
            className="TextField"
            label={
              currentApiType.dropBoxName === undefined
                ? "Api Type"
                : currentApiType.dropBoxName
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
      <FormLabel className={classes.formlabel}>
        How would you like to receive the information ?{" "}
      </FormLabel>
      <Autocomplete
        id="country-select-demo"
        style={{ marginBottom: "5vmin" }}
        options={apiMethodTypes}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.dropBoxName}
        onChange={(e, v) => setCurrentApiMethods(v)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              style: { color: "orange" },
            }}
            className="TextField"
            label={
              currentApiType.dropBoxName === undefined
                ? "Api Methods"
                : currentApiMethods.dropBoxName
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
          <input
            onClick={continueFunc}
            class="buttoncontinuee"
            type="submit"
            value="Get the Data"
          ></input>
        </Grid>
      </Grid>
    </div>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
