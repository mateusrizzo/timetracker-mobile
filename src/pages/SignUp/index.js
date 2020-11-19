import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';

import styles from './styles';

import api from '../../network/api';

export default function Login() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmedPassword, setConfirmedPassword] = useState(null);

  const navigation = useNavigation();

  async function handleSignUp() {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().min(6),
        confirmPassword: yup.string().matches(password),
      });
    } catch (err) {}
  }
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Icon name="person" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              name="name"
              autoCapitalize="none"
              autoCompleteType="name"
              placeholder="Name"
              keyboardType="default"
              returnKeyType="next"
              returnKeyLabel="next"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={[styles.inputContainer, styles.bottomInput]}>
            <Icon name="mail" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              name="email"
              autoCapitalize="none"
              autoCompleteType="email"
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              returnKeyLabel="next"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={[styles.inputContainer, styles.bottomInput]}>
            <Icon name="lock" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              name="password"
              placeholder="Password"
              secureTextEntry
              autoCompleteType="off"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={[styles.inputContainer, styles.bottomInput]}>
            <Icon name="lock" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
              autoCompleteType="off"
              value={confirmedPassword}
              onChangeText={setConfirmedPassword}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}> Login in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
