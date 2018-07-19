import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RainbowButton, Background, Section, Input} from '../components/common';

class FeaturedScreen extends Component {
  render() {
    return(
      <Background>
        <Section>
          <Input
            placeholder="Featured!"
          />
        </Section>
      </Background>
    );
  }
}

export default FeaturedScreen;
