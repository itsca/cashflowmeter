import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, ListItemText, Paper, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  description: {
    fontWeight: 'normal',
    marginBottom: '1em'
  },
  definitions: {
    marginBottom: '4em'
  },
  getStartedButton: {
    background: 'linear-gradient(320deg, #64dd17 10%, #14F50C 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(20, 245, 12, .2)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  main: {
    minHeight: '100vh',
    marginBottom: '6em'
  },
  root: {
    padding: '5%'
  },
  welcome: {
    marginBottom: '0.5em',
  },
});

const HomePage: React.FC = () => {

  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid item xs={12} className={classes.main}>
        <Typography variant="h2" className={classes.welcome}>
          Welcome.
        </Typography>
        <Typography variant="h6" className={classes.description} color={'textSecondary'}>
          Cashflowmeter is a <b>personal financial calculator</b> aimed to help users calculate their passive income, total income and total expenses in order to measure their <b>level of financial freedom</b>. The basic theory states that if your <b>passive income</b> is <b>greater</b> than your <b>monthly expenses</b>, you are <b>financially free</b>.
        </Typography>
        <Paper className={classes.definitions}>
          <List >
            <ListItem>
              <ListItemText
                primary="Passive Income:"
                secondary=" Income generated without investing any time on it (Interests/Dividends + Real Estate/Business)."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Active Income:"
                secondary="Income generated by time invested (Salary)."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Total Income:"
                secondary="Passive income plus active income."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Total Expenses:"
                secondary="Total monthly expenses from all sources."
              />
            </ListItem>
          </List>
        </Paper>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Button 
            variant="contained"
            className={classes.getStartedButton}
            disabled>
            Get Started
          </Button>
          <Typography variant="caption" color="error">
            The app is currently in construction and will be available shortly.
          </Typography>
        </Grid>
      </Grid>
      <Divider/>
      <Typography variant="caption">
        This is an open source project, you can find the sourcecode <a href="https://github.com/itsca/cashflowmeter">here</a>.
      </Typography>
    </Grid>
  );
}

export default HomePage;