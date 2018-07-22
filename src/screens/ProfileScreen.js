import React, { Component } from 'react';
import { Text } from 'react-native';
import { Section, Background } from '../components/common';
import Toolbar from '../components/Toolbar';


class ProfileScreen extends Component {
  render() {
    return (
      <Background>
        <Toolbar
          buttonOne="arrow-left"
          onPressOne={() => this.props.navigation.navigate('Home')}
        />
        <Section>
          <Toolbar />
          <Text style={{ color: 'white' }}>
            PROFILE
          </Text>
        </Section>
      </Background>
  );
  }
}

export default ProfileScreen;
