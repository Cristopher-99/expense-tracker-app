import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {profileScreens} from '../../routes/screens';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      {profileScreens().map(screen => (
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

export default ProfileStack;
