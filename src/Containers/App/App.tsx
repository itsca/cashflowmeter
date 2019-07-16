import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core";
// import './App.css';
import Layout from '../../Components/Layout/Layout';
import { BrowserRouter as Router } from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#558b2f',
    },
    secondary: {
      main: '#ff7043',
    }
  }
});

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
        <Layout/>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
