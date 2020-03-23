/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Example from './src/Example.android';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Example />
      </View>
    );
  }
}
