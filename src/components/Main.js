import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { period: '', slug: '', value: '' };
    this.baseUrlImages = 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/';
  }

  render() {
    if (this.props.slug) {
      return (
        <View style={styles.container}>
          <View style={styles.section}>

            <View style={styles.header}>
              <Text style={styles.headerText}>{this.props.value}</Text>
              <Image
                style={styles.image}
                source={{ uri: `${this.baseUrlImages}${this.props.slug}.jpg` }}
              />
              <Text style={styles.headerPeriod}>{this.props.period}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.contentTitle}>
                Palavras karma:
              </Text>
              <Text style={styles.contentText}>
                Dor, sofrimento...
              </Text>

              <Text style={styles.contentTitle}>
                Titulo:
              </Text>
              <Text style={styles.contentText}>
                Sacudidas acordam você para o que acontece em uma relação ou sociedade. 
                Ou pode ser só o seu desejo de maior autonomia e liberdade. Mudanças vão 
                se impondo com mais urgência.
              </Text>

              <Text style={styles.contentTitle}>
                Número do azar:
              </Text>
              <Text style={styles.contentText}>
                13
              </Text>

              <Text style={styles.contentTitle}>
                Cor do desespero:
              </Text>
              <Text style={styles.contentText}>
                Vermelho
              </Text>
            </View>

          </View>
          <View style={styles.footer}>
            <TouchableHighlight
              onPress={() => { Actions.signs(); }}
              underlayColor='#ffffff'
            >
              <Text style={styles.menu}>...</Text>
            </TouchableHighlight>
          </View>
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
            <Text style={styles.headerText}>Escolha um signo</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => { Actions.signs(); }}
            underlayColor='#ffffff'
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
    flex: 9
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center'
  },
  menu: {
    color: '#00a8b9',
    fontSize: 30,
    textAlign: 'center',
    width: 340
  },
  text: {
    color: '#ffffff',
    fontSize: 18
  }
});
