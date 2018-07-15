import React from 'react';
import { View } from 'react-native';
import { MainNavigator } from './src/router';
import AuthProvider from './src/contexts/AuthProvider';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
    apiKey: "AIzaSyDmMrOvUFT7vYoN-E7onFh1l5ImXGW2ueY",
    authDomain: "manager-3c029.firebaseapp.com",
    databaseURL: "https://manager-3c029.firebaseio.com",
    projectId: "manager-3c029",
    storageBucket: "manager-3c029.appspot.com",
    messagingSenderId: "131797543851"
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    );
  }
}
