import React, { useState } from 'react';
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
  import { NavLink, Link } from 'react-router-dom';

  import { addNewApplicantCreator } from '../application-state/applicationState';
  

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

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [city, setCity] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

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
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputLabel htmlFor="component-lastName">Last Name</InputLabel>
            <Input
              id="component-lastName"
              name="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputLabel htmlFor="component-date-of-birth">Date of Birth</InputLabel>
            <Input
              id="component-date-of-birth"
              name="date-of-birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />

          <br />
            <InputLabel htmlFor="component-city">City</InputLabel>
            <Input
              id="component-city"
              name="city"
              onChange={(e) => setCity(e.target.value)}
            />
             <InputLabel htmlFor="component-email">Email</InputLabel>
            <Input
              id="component-email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
             <InputLabel 
             htmlFor="component-city">Phone Number</InputLabel>
             <Input
              id="component-phoneNumber"
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}>
             </Input>

          <br />
          <Button variant="contained" color="primary" type="submit" >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}