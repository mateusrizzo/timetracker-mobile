import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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

// import api from '../../network/api';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();

  function handleLogin() {
    console.log(email);
    console.log(password);
  }
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
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={[styles.inputContainer, styles.bottomInput]}>
            <Icon name="lock" size={14} color="#B0B0C3" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              autoCompleteType="off"
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpButtonText}> Don't lose time</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
