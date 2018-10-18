import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.text}>TEXTO</Text>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => { Actions.signs(); }}
          >
            <Text style={styles.menu}>...</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00a8b9',
    flex: 1,
    flexDirection: 'column'
  },
  section: {
    flex: 7
  },
  footer: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  menu: {
    color: '#00a8b9',
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    color: '#00a8b9',
    fontSize: 18
  }
});
