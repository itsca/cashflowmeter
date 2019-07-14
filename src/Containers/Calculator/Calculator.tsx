import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, ListItemText, Paper, Button, Divider, Card } from '@material-ui/core';

interface Props {
}

export default class Calculator extends React.Component<Props> {

  
  render(): JSX.Element {
    return (
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="h2">
              Calculator.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
