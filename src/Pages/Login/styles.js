import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 7,
    fontFamily: 'Roboto-Thin',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
  },
  input: {
    width: 315,
    height: 60,
    fontFamily: 'Montserrat-Medium',
    backgroundColor: '#BBDEFB',
  },
  bottomInput: {
    marginTop: 20,
  },
  loginButton: {
    marginTop: 50,
    backgroundColor: '#00897B',
    width: 315,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#Fdfafa',
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
  },
});
