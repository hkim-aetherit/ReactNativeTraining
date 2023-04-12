/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import DateHead from './components/DateHead';

function App(): JSX.Element {
  const today = new Date();

  return (
    <View style={{flex: 1}}>
      <DateHead date={today} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
