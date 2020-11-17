import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../Pages/Login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
