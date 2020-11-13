import React from 'react';
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
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign In</Text>
        </View>
        <Image style={styles.image} source={SignInImage} />
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Icon name="mail" size={14} color="#B0B0C3" />
            <TextInput style={styles.input} placeholder="Email" />
          </View>
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
