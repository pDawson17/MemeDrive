import React, { Component } from 'react';
import { Background, Section, Header, Input, RainbowButton } from '../components/common';
import { Text } from 'react-native';
import { AuthConsumer } from '../contexts/AuthProvider';
import firebase from 'firebase';
class LoginScreen extends Component {
//add a loading spinner eventually
  switchPage(context) {
    if(context.state.loggedIn){
      return(
        this.props.navigation.navigate('Home')
      );
    }
  }

  render() {
    return(
      <AuthConsumer>
      {(context) => (
        <Background>
          {this.switchPage(context)}
          <Header label="MemeDrive 3000" />
          <Section>
            <Input
              placeholder="email"
              value={context.state.email}
              onChangeText={context.setEmail}
            />
            <Input
              value={context.state.password}
              onChangeText={context.setPassword}
              placeholder="password"
            />
          </Section>
          {context.renderError()}
          <Section>
              <RainbowButton
                label="Login"
                onPress={context.loginPress}
              />
              <RainbowButton
                label="Create Account"
                onPress={context.addOne}
              />
          </Section>
        </Background>
      )}
      </AuthConsumer>

  );
  };
};

export default LoginScreen;
