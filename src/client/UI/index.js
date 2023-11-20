import React from 'react';

import Grid from './Grid';
import GridItem from './GridItem';

const Container = ({ children }) => (
  <Grid>
    <GridItem behavior="fixed">
      header
    </GridItem>
    <GridItem behavior="fixed">
      {children}
    </GridItem>
    <GridItem push="left" behavior="fixed">
      footer
    </GridItem>
  </Grid>
);

export default Container;
