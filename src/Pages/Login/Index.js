import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignInImage from '../../assets/images/Illustration.png';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  function handleLogin() {}
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
        </View>
        <Image style={styles.image} source={SignInImage} />
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Icon name="mail" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCompleteType="email"
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={[styles.inputContainer, styles.bottomInput]}>
            <Icon name="lock" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              autoCompleteType="off"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
