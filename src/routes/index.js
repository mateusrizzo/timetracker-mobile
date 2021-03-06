import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const App = createStackNavigator();

export default function Routes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#E3F2FD'},
      }}>
      <App.Screen name="Login" component={Login} />
      <App.Screen name="SignUp" component={SignUp} />
    </App.Navigator>
  );
}
