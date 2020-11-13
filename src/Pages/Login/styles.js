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
    fontSize: 28,
    fontFamily: 'Montserrat-ExtraLight',
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
    fontFamily: 'Roboto-Thin',
    backgroundColor: '#BBDEFB',
  },
  bottomInput: {
    marginTop: 20,
  },
  loginButton: {
    marginTop: 120,
    backgroundColor: '#00897B',
    width: 315,
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#Fdfafa',
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraLight',
    alignSelf: 'center',
  },
});
