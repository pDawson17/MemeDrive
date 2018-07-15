import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RainbowButton, Background, Section, Input } from '../components/common';

class SharingScreen extends Component {
  render() {
    return(
      <Background>
        <Section>
          <RainbowButton
            label="page2"
          />
        </Section>
      </Background>
    );
  }
}

export default SharingScreen;
