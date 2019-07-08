import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core";
import './App.css';
import Layout from '../../Components/Layout/Layout';

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
    <div className="App">
      <ThemeProvider theme={theme}>
      <Layout/>
      </ThemeProvider>
    </div>
  );
}

export default App;
