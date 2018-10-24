import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Badge, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import BottomNavigation from './BottomNavigation';
import Colors from '../assets/data/Colors';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { period: '', slug: '', value: '', number: '' };
    this.baseUrlImages = 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/';
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 50);
  }

  getDateToday() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@signsNumbers');
      this.setState({ number: JSON.parse(value)[this.props.slug] });
    } catch (error) {
      console.log(`Error retrieving data${error}`);
    }
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async saveKey() {
    const value = await AsyncStorage.getItem('@signsNumbers');

    if (JSON.parse(value).dateNow === this.getDateToday()) {
      return;
    }

    const signsNumbersObj = {
      aries: this.getRandomNumber(),
      libra: this.getRandomNumber(),
      taurus: this.getRandomNumber(),
      scorpio: this.getRandomNumber(),
      gemini: this.getRandomNumber(),
      sagittarius: this.getRandomNumber(),
      cancer: this.getRandomNumber(),
      capricorn: this.getRandomNumber(),
      leo: this.getRandomNumber(),
      aquarius: this.getRandomNumber(),
      virgo: this.getRandomNumber(),
      pisces: this.getRandomNumber(),
      dateNow: this.getDateToday()
    };

    try {
      await AsyncStorage.setItem('@signsNumbers', JSON.stringify(signsNumbersObj));
    } catch (error) {
      console.log(`Error saving data${error}`);
    }
  }

  render() {
    if (this.props.slug) {
      return (
        <View style={styles.container}>
          <View style={styles.section}>

            <View style={styles.section__header}>
              <Image
                style={styles.section__headerImage}
                source={{ uri: `${this.baseUrlImages}signs/${this.props.slug}.jpg` }}
              />
              <Text style={styles.section__headerText}>{this.capitalize(this.props.value)}</Text>
              <Text style={styles.section__headerPeriod}>{this.props.period}</Text>
            </View>

            <View style={styles.section__content}>
              <Text style={styles.section__contentTtile}>
                Paixões são absolutas
              </Text>
              <Text style={styles.section__contentDescription}>
                Sacudidas acordam você para o que acontece em uma relação ou sociedade. 
                Ou pode ser só o seu desejo de maior autonomia e liberdade. Mudanças vão 
                se impondo com mais urgência.
              </Text>

              <View style={styles.section__contentLuck}>
                <TouchableHighlight
                  onPress={() => {
                    this.getKey();
                  }}
                  underlayColor='#ffffff'
                >
                  <View style={styles.section__contentLuckButton}>
                    <Icon 
                      style={styles.section__contentLuckButtonIcon} 
                      type="FontAwesome" 
                      name="trash"
                    />
                    <Text style={styles.section__contentLuckButtonText}>
                      Pegue a cor e o número do seu dia.
                    </Text>
                  </View>
                </TouchableHighlight>

                <View style={styles.section__contentLuckBadge}>
                  <Badge 
                    style={{ backgroundColor: Colors[this.state.number ? this.state.number : 50] }}
                  >
                    <Text style={styles.section__contentLuckBadgeNumber}>
                      {this.state.number}
                    </Text>
                  </Badge>
                </View>
              </View>
            </View>
          </View>

          <BottomNavigation />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <TouchableHighlight
            onPress={() => { 
              this.saveKey();
              Actions.signs();
            }}
            underlayColor='#00a8b9'
          >
            <View style={styles.section__main}>
              <Image
                style={styles.section__mainImage}
                source={{ uri: `${this.baseUrlImages}astrology.png` }}
              />
              <Text style={styles.section__mainText}>Escolha um signo</Text>
            </View>
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
    flex: 9
  },
  section__main: {
    alignItems: 'center',
    marginTop: 100
  },
  section__mainImage: {
    height: 200,
    width: 200
  },
  section__mainText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  section__header: {
    alignItems: 'center',
    flex: 1
  },
  section__headerImage: {
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    borderColor: '#ffda87',
    height: 60,
    width: 120,
  },
  section__headerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5
  },
  section__headerPeriod: {
    color: '#ffffff'
  },
  section__content: {
    backgroundColor: '#ededed',
    borderColor: '#cccccc',
    borderRadius: 10,
    borderWidth: 1,
    flex: 3,
    margin: 20,
    padding: 10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#cccccc',
    shadowOffset: { height: 10, width: 10 }
  },
  section__contentTtile: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  section__contentDescription: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    color: '#333333',
    fontSize: 14,
    paddingBottom: 50
  },
  section__contentLuck: {
    alignItems: 'center'
  },
  section__contentLuckButton: {
    alignItems: 'center',
    backgroundColor: '#ededed'
  },
  section__contentLuckButtonIcon: {
    color: '#333333',
    fontSize: 40,
    margin: 10
  },
  section__contentLuckButtonText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  section__contentLuckBadge: {
    alignItems: 'center',
    marginTop: 20
  },
  section__contentLuckBadgeNumber: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
