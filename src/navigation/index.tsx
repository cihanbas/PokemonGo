// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonDetailScreen, PokemonListScreen} from '@screens';
import * as React from 'react';
import {RootStackParamList} from '@models';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={PokemonDetailScreen} />
      <Stack.Screen name="List" component={PokemonListScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
