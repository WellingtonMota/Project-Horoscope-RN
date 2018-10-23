import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class BottomNavigation extends Component {
  render() {
    return (
      <View style={styles.bottom_navigation}>
        <TouchableHighlight
          onPress={() => { Actions.signs(); }}
          underlayColor='#ffffff'
        >
          <Icon style={styles.bottom_navigationButton} type="FontAwesome" name="th" />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom_navigation: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center'
  },
  bottom_navigationButton: {
    color: '#00a8b9',
    fontSize: 30,
    textAlign: 'center',
    width: 340
  },
});
