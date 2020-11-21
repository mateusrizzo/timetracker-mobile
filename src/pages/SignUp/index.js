/* eslint-disable react-native/no-inline-styles */
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
import {Formik} from 'formik';

import styles from './styles';

import api from '../../network/api';

export default function Login() {
  // const [name, setName] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [confirmedPassword, setConfirmedPassword] = useState(null);

  const navigation = useNavigation();

  function handleSignUp(data) {
    console.log(data);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <Formik
          onSubmit={(values) => handleSignUp(values)}
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required('Please insert a name'),
            email: yup
              .string()
              .required('Please insert a email')
              .email('Insert a valid email'),
            password: yup
              .string()
              .min(6, 'Password need to have, at least, 6 characters'),
            confirmPassword: yup
              .mixed()
              .test('match', 'Passwords are not matching', function (password) {
                return password === this.options.context.confirmPassword;
              }),
          })}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <>
              <View style={styles.form}>
                <View style={styles.inputContainer}>
                  <Icon
                    name="person"
                    size={14}
                    color="#B0B0C3"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    name="name"
                    autoCapitalize="none"
                    autoCompleteType="name"
                    placeholder="Name"
                    keyboardType="default"
                    returnKeyType="next"
                    returnKeyLabel="next"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={() => setFieldTouched('name')}
                  />
                </View>
                {touched.name && errors.name ? (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.name}
                  </Text>
                ) : null}
                <View style={[styles.inputContainer, styles.bottomInput]}>
                  <Icon
                    name="mail"
                    size={14}
                    color="#B0B0C3"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    name="email"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    returnKeyLabel="next"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                </View>
                {touched.email && errors.email ? (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.email}
                  </Text>
                ) : null}
                <View style={[styles.inputContainer, styles.bottomInput]}>
                  <Icon
                    name="lock"
                    size={14}
                    color="#B0B0C3"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    autoCompleteType="off"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                  />
                </View>
                {touched.password && errors.password ? (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.password}
                  </Text>
                ) : null}
                <View style={[styles.inputContainer, styles.bottomInput]}>
                  <Icon
                    name="lock"
                    size={14}
                    color="#B0B0C3"
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    autoCompleteType="off"
                    value={values.confirmedPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={() => setFieldTouched('confirmPassword')}
                  />
                </View>
                {touched.confirmPassword && errors.confirmPassword ? (
                  <Text style={{fontSize: 12, color: 'red'}}>
                    {errors.confirmPassword}
                  </Text>
                ) : null}
              </View>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.buttonText}>Create Account</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
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
