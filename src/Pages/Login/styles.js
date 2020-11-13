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
  image: {
    marginTop: 51,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  inputContainer: {
    width: 315,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#BBDEFB',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  input: {
    flex: 1,
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
