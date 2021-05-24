/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import Router from './src/navigation/Router';

import HomeScreen from './src/screens/Home';

import {withAuthenticator} from 'aws-amplify-react-native';
import BottomTabNavigation from './src/navigation/Tab';
import AppNavigation from './src/navigation';
import Home from './src/screens/Home';

export default function App() {
  return <AppNavigation />;
}

// export default withAuthenticator(App);;
