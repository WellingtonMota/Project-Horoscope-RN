import React, { Component } from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArrSigns from '../assets/data/Signs';

export default class Signs extends Component {
  constructor(props) {
    super(props);

    this.state = { period: '', slug: '', value: '', number: null };
    this.baseUrlImages = 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/';
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={ArrSigns}
          renderItem={({ item }) =>
            <View style={styles.section}>
              <TouchableHighlight
                onPress={() => {
                  Actions.main({ 
                    period: item.period,
                    slug: item.slug,
                    value: item.value,
                    number: null
                  });
                }}
                underlayColor='#00a8b9'
              >
                <Image 
                  style={styles.image} 
                  source={{ uri: `${this.baseUrlImages}signs/${item.slug}.jpg` }}
                />
              </TouchableHighlight>
              <Text style={styles.text}>{this.capitalize(item.value)}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00a8b9',
    flex: 1
  },
  section: {
    margin: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center'
  },
  image: {
    borderColor: '#ffda87',
    borderRadius: 50,
    borderWidth: 5,
    height: 100,
    width: 100
  }
});
