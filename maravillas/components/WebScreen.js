import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class WebScreen extends React.Component {
  sitio = this.props.route.params.sitio;

  lugares = {
    tajmahal:
      'https://www.google.com/maps/place/Taj+Mahal/@27.1744589,78.0413493,17.87z/data=!4m5!3m4!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422',
    granmuralla:
      'https://www.google.com/maps/place/Muralla+China/@40.4319118,116.5681862,17z/data=!3m1!4b1!4m5!3m4!1s0x35f121d7687f2ccf:0xd040259b950522df!8m2!3d40.4319077!4d116.5703749',
    coliseo:
      'https://www.google.com/maps/place/Coliseo+de+Roma/@41.8902142,12.4900422,17z/data=!3m1!4b1!4m5!3m4!1s0x132f61b6532013ad:0x28f1c82e908503c4!8m2!3d41.8902102!4d12.4922309',
  };

  render() {
    console.log(this['lugares'][this.sitio]);
    console.log(this.sitio);
    return (
      <WebView
        style={styles.webSize}
        source={{uri: this['lugares'][this.sitio]}}></WebView>
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
  webSize: {
    width: '100%',
    height: '100%',
  },
});
