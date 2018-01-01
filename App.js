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
  View
} from 'react-native';



export default class App extends Component {
  render() {
    return (
      <View >
        <Text style={[styles.textoLaranjinha]}>Olá mundo React Git Hub</Text>
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


