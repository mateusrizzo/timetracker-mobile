import React from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native';

import Login from './src/Pages/Login/Index';

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
        translucent
      />
      <SafeAreaView style={styles.background}>
        <Login />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sampleText: {
    fontSize: 22,
  },
});

export default App;
