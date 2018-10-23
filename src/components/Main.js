import React, { Component } from 'react';
import {
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

    this.state = { period: '', slug: '', value: '' };
    this.baseUrlImages = 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/';
  }

  getDayToday() {
    const today = new Date();
    return today.getDate();
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

              <Text style={styles.section__contentTtile}>
                Palavras karma:
              </Text>
              <Text style={styles.section__contentDescription}>
                Dor, sofrimento...
              </Text>

              <Text style={styles.section__contentTtile}>
                Número do azar:
              </Text>
              <Badge info style={styles.section__contentBadge}>
                <Text style={styles.section__contentBadgeNumber}>{this.getDayToday()}</Text>
              </Badge>

              <Text style={styles.section__contentTtile}>
                Cor do desespero:
              </Text>
              <Badge style={{ backgroundColor: Colors[this.getDayToday()] }}>
                <Text style={{ color: Colors[this.getDayToday()] }}>
                  {Colors[this.getDayToday()]}
                </Text>
              </Badge>
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
            onPress={() => { Actions.signs(); }}
            underlayColor='#ffffff'
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
        
        <BottomNavigation />
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
    fontWeight: 'bold'
  },
  section__contentDescription: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    color: '#333333',
    fontSize: 14,
    paddingBottom: 10
  },
  section__contentBadge: {
    backgroundColor: '#00a8b9'
  },
  section__contentBadgeNumber: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
