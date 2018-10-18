import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main';
import Signs from './components/Signs';

const Routes = () => (
  <Router 
    navigationBarStyle={styles.navBar} 
    titleStyle={styles.navBarTitle} 
    barButtonTextStyle={styles.barButtonTextStyle} 
    barButtonIconStyle={styles.barButtonIconStyle}
  >
    <Scene key='root'>
      <Scene key='main' component={Main} initial title='Horóscopo do dia' />
      <Scene key='signs' component={Signs} title='Escolha um signo' />
    </Scene>
  </Router>
);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#00a8b9',
    height: 40
  },
  navBarTitle: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 18,
    textAlign: 'center'
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  },
  barButtonIconStyle: {
    tintColor: '#FFFFFF'
  }
});

export default Routes;
