import React from 'react';
import Typography from '@material-ui/core/Typography';
import './HomePage.css';
import logo from './logo.svg';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant="h1">
        Hi!
      </Typography>
      <Typography variant="body2">
        Welcome, this is an app made with react and typescript deployed to a Heroku server. There should be a lot more to see in a couple of days as of May 29 2019
      </Typography>
    </div>
  );
}

export default HomePage;
