import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Badge } from 'native-base';
import { Actions } from 'react-native-router-flux';
import BottomNavigation from './BottomNavigation';
import Colors from '../assets/data/Colors';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.database = firebase.database();
    this.state = {
      period: '',
      slug: '',
      value: '',
      number: '',
      prediction: ''
    };
    this.baseUrlImages = 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/';
  }

  componentWillMount() {
    this.getSigns();
  }

  getRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }

  getDateToday() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    return `${dd}/${mm}/${yyyy}`;
  }

  async getSigns() {
    try {
      const valueNumber = await AsyncStorage.getItem('@signsNumbers');
      const valuePrediction = await AsyncStorage.getItem('@signsPredictions');

      this.setState({ number: JSON.parse(valueNumber)[`${this.props.slug}`] });
      this.setState({ prediction: JSON.parse(valuePrediction)[`${this.props.slug}`] });
    } catch (error) {
      console.log(`Error retrieving data${error}`);
    }
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async saveSignsPredictions() {
    const value = await AsyncStorage.getItem('@signsNumbers');

    if (JSON.parse(value).dateNow === this.getDateToday()) {
      return;
    }

    const signsPredictionsObj = {};

    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.aries = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.libra = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.taurus = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.scorpio = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.gemini = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.sagittarius = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.cancer = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.capricorn = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.leo = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.aquarius = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.virgo = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
    this.database.ref(this.getRandomNumber(40)).on('value', snapshot => {
      signsPredictionsObj.pisces = snapshot.val();
      AsyncStorage.setItem('@signsPredictions', JSON.stringify(signsPredictionsObj));
    });
  }

  async saveSignsNumbers() {
    const value = await AsyncStorage.getItem('@signsNumbers');

    if (JSON.parse(value).dateNow === this.getDateToday()) {
      return;
    }

    const signsNumbersObj = {
      aries: this.getRandomNumber(50),
      libra: this.getRandomNumber(50),
      taurus: this.getRandomNumber(50),
      scorpio: this.getRandomNumber(50),
      gemini: this.getRandomNumber(50),
      sagittarius: this.getRandomNumber(50),
      cancer: this.getRandomNumber(50),
      capricorn: this.getRandomNumber(50),
      leo: this.getRandomNumber(50),
      aquarius: this.getRandomNumber(50),
      virgo: this.getRandomNumber(50),
      pisces: this.getRandomNumber(50),
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
              <Text style={styles.section__contentDescription}>
                {this.state.prediction}
              </Text>

              <View style={styles.section__contentLuck}>
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
              this.saveSignsPredictions();
              this.saveSignsNumbers();
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
