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
  >
    <Scene key='root'>
      <Scene 
        initial 
        component={Main} 
        key='main' 
        renderBackButton={() => (null)} 
        renderLeftButton={() => (null)} 
        title='Horóscopo do dia'
      />
      <Scene
        component={Signs} 
        key='signs'
        renderBackButton={() => (null)}
        renderLeftButton={() => (null)} 
        title='Escolha um signo' 
      />
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
  }
});

export default Routes;
