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
    chichen:
      'https://www.google.com/maps/place/Chich%C3%A9n+Itz%C3%A1/@20.6842849,-88.5699713,17z/data=!4m9!1m2!2m1!1zQ2hpY2jDqW4gSXR6w6E!3m5!1s0x8f5138c6e391c0e7:0x7c1ea0a168994d9a!8m2!3d20.6842849!4d-88.5677826!15sCg5DaGljaMOpbiBJdHrDoVoQIg5jaGljaMOpbiBpdHrDoZIBE2FyY2hhZW9sb2dpY2FsX3NpdGU',
    cristo:
      'https://www.google.com/maps/place/Cristo+Redentor/@-22.951911,-43.2126759,17z/data=!3m1!4b1!4m5!3m4!1s0x997fd5984aa13f:0x9dc984d7019502de!8m2!3d-22.951916!4d-43.2104872',
    machu:
      'https://www.google.com/maps/place/Machu+Picchu/@-13.163136,-72.5471516,17z/data=!3m1!4b1!4m5!3m4!1s0x916d9a5f89555555:0x3a10370ea4a01a27!8m2!3d-13.1631412!4d-72.5449629',
    petra:
      'https://www.google.com/maps/place/Wadi+Musa,+Jordania/@30.3206627,35.4656454,14z/data=!3m1!4b1!4m5!3m4!1s0x15016930021ab6b1:0xe43a697bc3a3e0b9!8m2!3d30.3216354!4d35.4801251',
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
