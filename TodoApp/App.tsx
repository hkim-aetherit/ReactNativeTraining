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
  console.log(today);

  return (
    <SafeAreaView>
      <DateHead />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
