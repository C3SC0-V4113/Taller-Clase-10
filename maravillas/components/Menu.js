import React from 'react';

import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#674', fontSize: 25, fontWeight: 'bold'}}>
          Maravillas del Mundo
        </Text>
        <TouchableHighlight
          style={styles.botones}
          onPress={() =>
            this.props.navigation.navigate('Web', {
              sitio: 'tajmahal',
            })
          }>
          <Text style={styles.texto}>Taj Mahal</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.botones}
          onPress={() =>
            this.props.navigation.navigate('Web', {
              sitio: 'granmuralla',
            })
          }>
          <Text style={styles.texto}>La Gran Muralla china</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.botones}
          onPress={() =>
            this.props.navigation.navigate('Web', {
              sitio: 'coliseo',
            })
          }>
          <Text style={styles.texto}>Coliseo</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botones: {
    height: 40,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#abc',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    color: '#fff',
    fontSize: 30,
  },
});
