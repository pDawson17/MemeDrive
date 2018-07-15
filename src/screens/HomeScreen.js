import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  RainbowButton,
  Background,
  Section,
  AlbumDisplay,
  IconButton
 } from '../components/common';
 import Toolbar from '../components/Toolbar';

class HomeScreen extends Component {
  render() {
    return(
      <Background>
        <Section style={{justifyContent: 'flex-start'}}>
          <Toolbar
            buttonOne="user"
            buttonTwo="crosshair"
            buttonThree="plus-circle"
          />
          <AlbumDisplay  />
          <AlbumDisplay  />
          <AlbumDisplay  />
        </Section>
      </Background>
    );
  }
}

export default HomeScreen;
