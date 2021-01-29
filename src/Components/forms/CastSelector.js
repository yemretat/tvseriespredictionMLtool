import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Header from "../ui/Header";
import Select from "@material-ui/core/Select";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 1200,
    width: 1150,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

/*const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];*/

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CastSelector({
  countryCasts,
  changeCurrentCast,
  nextStep,
  prevStep,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    changeCurrentCast(event.target.value);
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
    <div>
      <MuiThemeProvider>
        <React.Fragment>
          <Header />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {countryCasts.map((name) => (
                <MenuItem
                  key={name.id}
                  value={name.name}
                  style={getStyles(name.name, personName, theme)}
                >
                  {name.name}
                </MenuItem>
              ))}
            </Select>
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
          </FormControl>
        </React.Fragment>
      </MuiThemeProvider>
    </div>
  );
}
