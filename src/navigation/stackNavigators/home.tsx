import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {homeScreens} from '../../routes/screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {homeScreens().map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
