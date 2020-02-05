import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
