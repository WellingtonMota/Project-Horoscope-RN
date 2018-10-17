import React from 'react';

import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='root'>
      <Scene key='Main' component={Main} initil title='Página principal' />
    </Scene>
  </Router>
);

export default Routes;
