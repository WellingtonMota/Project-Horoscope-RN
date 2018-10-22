import React, { Component } from 'react';
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Signs extends Component {
  constructor(props) {
    super(props);

    this.state = { sign: '' };
    this.baseUrlImages = 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/';
  }

  dispatchSign(sign) {
    this.setState({ sign });
    alert(sign);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={[
            {
              slug: 'aries',
              value: 'áries'
            },
            {
              slug: 'libra',
              value: 'libra'
            },
            {
              slug: 'taurus',
              value: 'touro'
            },
            {
              slug: 'scorpio',
              value: 'escorpião'
            },
            {
              slug: 'gemini',
              value: 'gêmeos'
            },
            {
              slug: 'sagittarius',
              value: 'sagitário'
            },
            {
              slug: 'cancer',
              value: 'câncer'
            },
            {
              slug: 'capricorn',
              value: 'capricórnio'
            },
            {
              slug: 'leo',
              value: 'leão'
            },
            {
              slug: 'aquarius',
              value: 'aquário'
            },
            {
              slug: 'virgo',
              value: 'virgem'
            },
            {
              slug: 'pisces',
              value: 'peixes'
            }
          ]}
          renderItem={({ item }) =>
            <View style={styles.section}>
              <TouchableHighlight
                onPress={() => { this.dispatchSign(item.slug); }}
                underlayColor='#00a8b9'
              >
                <Image 
                  style={styles.image} 
                  source={{ uri: `${this.baseUrlImages}${item.slug}.jpg` }}
                />
              </TouchableHighlight>
              <Text style={styles.text}>{item.value}</Text>
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
  block: {
    height: 100,
    width: 100
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  image: {
    borderColor: '#ffda87',
    borderRadius: 50,
    borderWidth: 5,
    height: 100,
    width: 100
  }
});
