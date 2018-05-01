import React from 'react';
import { hot } from 'react-hot-loader';

import Header from '../Header';
import Main from '../../containers/MainContainer';
import Grid from './style';

const App = () => (
  <Grid>
    <Header />
    <Main />
  </Grid>
);

export default hot(module)(App);

