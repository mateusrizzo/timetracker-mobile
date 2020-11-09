import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import Login from './src/Pages/Login/Index';

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E5E5E5"
        translucent
      />
      <View style={styles.background}>
        <Login />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default App;
