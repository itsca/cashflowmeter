import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, List, ListItem, ListItemText, Paper, Button, Divider, Card } from '@material-ui/core';

const Calculator: React.FC = () => {
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
  )
}

export default Calculator
