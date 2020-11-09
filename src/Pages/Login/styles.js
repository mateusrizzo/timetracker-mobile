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
    width: 290,
    height: 36,
    borderWidth: 1,
    fontFamily: 'Roboto-Thin',
  },
  bottomInput: {
    marginTop: 30,
  },
  loginButton: {
    marginTop: 120,
    backgroundColor: '#363333',
    width: 175,
    height: 45,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#Fdfafa',
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraLight',
    alignSelf: 'center',
  },
});
