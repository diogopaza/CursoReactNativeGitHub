/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      /*
      <View >
        <Text style={[styles.textoLaranjinha]}>Olá mundo React Git Hub</Text>
      </View>
      */
      <View>
        <Text style={[styles.textoLaranjinha]}>Olá mundo React Git Hub</Text>
        <Image source={require( './01.jpg')}
            style={{width:300, height:400}}   />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoLaranjinha:{
    color:'tomato',
    fontWeight:'bold',
    fontSize:30

  }

})


