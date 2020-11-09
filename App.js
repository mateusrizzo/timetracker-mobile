import React from 'react';
import {SafeAreaView, Text, StatusBar, StyleSheet} from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent />
      <SafeAreaView style={styles.background}>
        <Text style={styles.sampleText}>Cronum</Text>
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
