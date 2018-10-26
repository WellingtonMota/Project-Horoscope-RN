import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import * as firebase from 'firebase';
import Routes from './src/Routes';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAWcFak1T0pveEv6BG8t84_W4JjkKKp-4s',
      authDomain: 'horoscope-61a6b.firebaseapp.com',
      databaseURL: 'https://horoscope-61a6b.firebaseio.com',
      projectId: 'horoscope-61a6b',
      storageBucket: 'horoscope-61a6b.appspot.com',
      messagingSenderId: '1098170718093'
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Routes />
    );
  }
}
