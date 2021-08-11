import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input'
import {
    FormControl,
    FormHelperText,
    InputLabel,
    Button,
    CircularProgress,
    Snackbar,
    Grid,
  } from "@material-ui/core";
  

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Apply() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "30vh" }}
    >
      <Grid item xs={12}>
        <form
          className={classes.root}
          autoComplete="on"
        >
          <br />
          <br />
            <InputLabel htmlFor="component-firstName">First Name</InputLabel>
            <Input
              id="component-firstName"
              name="First Name"
            />
            <InputLabel htmlFor="component-lastName">Last Name</InputLabel>
            <Input
              id="component-lastName"
              name="Last Name"
            />
            <InputLabel htmlFor="component-date-of-birth">Date of Birth</InputLabel>
            <Input
              id="component-date-of-birth"
              name="date-of-birth"
            />

          <br />
            <InputLabel htmlFor="component-city">City</InputLabel>
            <Input
              id="component-city"
              name="city"
            />
             <InputLabel htmlFor="component-email">Email</InputLabel>
            <Input
              id="component-email"
              name="email"
            />
             <InputLabel htmlFor="component-city">Phone Number</InputLabel>

          <br />
          <Button variant="contained" color="primary" type="submit" >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}