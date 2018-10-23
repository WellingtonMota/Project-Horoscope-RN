import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
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

  render() {
    if (this.props.slug) {
      return (
        <View style={styles.container}>
          <View style={styles.section}>

            <View style={styles.section__header}>
              <Text style={styles.section__headerText}>{this.props.value}</Text>
              <Image
                style={styles.section__headerImage}
                source={{ uri: `${this.baseUrlImages}signs/${this.props.slug}.jpg` }}
              />
              <Text style={styles.section__headerPeriod}>{this.props.period}</Text>
            </View>

            <View style={styles.section__content}>
              <Text style={styles.section__contentTtile}>
                Titulo:
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
              <Text style={styles.section__contentDescription}>
                {this.getDayToday()}
              </Text>

              <Text style={styles.contentTitle}>
                Cor do desespero:
              </Text>
              <View style={styles.section__contentBgColor}>
                <Text style={styles.section__contentDescription}>{Colors[this.getDayToday()]}</Text>
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
            onPress={() => { Actions.signs(); }}
            underlayColor='#ffffff'
          >
            <View>
              <Image
                style={styles.section__image}
                source={{ uri: `${this.baseUrlImages}astrology.png` }}
              />
              <Text style={styles.section__text}>Escolha um signo</Text>
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
  section__image: {
    backgroundColor: '#ffffff',
    height: 100,
    width: 100
  },
  section__header: {
    backgroundColor: '#E6FF80',
    flex: 1
  },
  section__content: {
    backgroundColor: '#B33300',
    flex: 4
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  }
});
