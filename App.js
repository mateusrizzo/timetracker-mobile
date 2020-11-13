import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import Login from './src/Pages/Login/Index';

function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#E3F2FD"
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
    backgroundColor: '#E3F2FD',
  },
});

export default App;
