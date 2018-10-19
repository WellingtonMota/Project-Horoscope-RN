import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

const buttonAries = require('../assets/images/signs/aries.jpg');
const buttonLibra = require('../assets/images/signs/libra.jpg');
const buttonTaurus = require('../assets/images/signs/taurus.jpg');
const buttonScorpio = require('../assets/images/signs/scorpio.jpg');
const buttonGemini = require('../assets/images/signs/gemini.jpg');
const buttonSagittarius = require('../assets/images/signs/sagittarius.jpg');
const buttonCancer = require('../assets/images/signs/cancer.jpg');
const buttonCapricorn = require('../assets/images/signs/capricorn.jpg');
const buttonLeo = require('../assets/images/signs/leo.jpg');
const buttonAquarius = require('../assets/images/signs/aquarius.jpg');
const buttonVirgo = require('../assets/images/signs/virgo.jpg');
const buttonPisces = require('../assets/images/signs/pisces.jpg');

export default class Signs extends Component {
  constructor(props) {
    super(props);

    this.state = { sign: '' };
  }

  dispatchSign(sign) {
    this.setState({ sign });
    alert(sign);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('aries'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonAries} />
            </TouchableHighlight>
            <Text style={styles.text}>Áries</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('libra'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonLibra} />
            </TouchableHighlight>
            <Text style={styles.text}>Libra</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('taurus'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonTaurus} />
            </TouchableHighlight>
            <Text style={styles.text}>Touro</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('scorpio'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonScorpio} />
            </TouchableHighlight>
            <Text style={styles.text}>Escorpião</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('gemini'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonGemini} />
            </TouchableHighlight>
            <Text style={styles.text}>Gêmeos</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('sagittarius'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonSagittarius} />
            </TouchableHighlight>
            <Text style={styles.text}>Sagitário</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('cancer'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonCancer} />
            </TouchableHighlight>
            <Text style={styles.text}>Câncer</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('capricorn'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonCapricorn} />
            </TouchableHighlight>
            <Text style={styles.text}>Capricórnio</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('leo'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonLeo} />
            </TouchableHighlight>
            <Text style={styles.text}>Leão</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('aquarius'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonAquarius} />
            </TouchableHighlight>
            <Text style={styles.text}>Aquário</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('virgo'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonVirgo} />
            </TouchableHighlight>
            <Text style={styles.text}>Virgem</Text>
          </View>

          <View style={styles.block}>
            <TouchableHighlight
              onPress={() => { this.dispatchSign('pisces'); }}
              underlayColor='#00a8b9'
            >
              <Image style={styles.image} source={buttonPisces} />
            </TouchableHighlight>
            <Text style={styles.text}>Peixes</Text>
          </View>

        </View>
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
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  block: {
    height: 100,
    margin: 10,
    marginBottom: 20,
    width: 100
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
