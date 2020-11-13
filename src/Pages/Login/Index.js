import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';

export default function Login() {
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput
            style={[styles.input, styles.bottomInput]}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
