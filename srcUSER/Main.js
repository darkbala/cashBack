import React from 'react';
import Hello from './components/Hello';
import { createStackNavigator } from '@react-navigation/stack';
import Enter from './components/Enter';
import Registration from './components/Registration';
import Auth from './components/Auth';
import Tab from './components/Tab';

const Main = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Tab'} component={Tab} options={{ headerShown: false }} />
      <Stack.Screen name={'Enter'} component={Enter} options={{ headerShown: false }} />
      <Stack.Screen name={'Auth'} component={Auth} options={{ headerShown: false }} />
      <Stack.Screen
        name={'Registration'}
        component={Registration}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;
