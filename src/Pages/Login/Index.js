import React from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cronum</Text>
        <Text style={styles.subtitle}>Timetracking made easy</Text>
      </View>
      <View>
        <TextInput />
        <TextInput />
      </View>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
