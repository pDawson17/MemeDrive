import React, { createContext, Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  loginPress = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword( email, password )
    .then(this.onLoginSuccess.bind(this))
    .catch(this.onLoginFail.bind(this));
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loggedIn: true,
      error: ''
    });
  }
  onLoginFail() {
    this.setState({
      error: 'Failed to authenticate user'
    })
  }
  renderError() {
    if(this.state.error){
      return(
        <View style={{backgroundColor: 'transparent', alignItems: 'center'}}>
          <Text style={{color: 'red', fontSize: 20}}>
            {this.state.error}
          </Text>
        </View>
    );
  }
}
  state = {
    email: '',
    password: '',
    loggedIn: false,
    error: ''
  }
  render() {
    return(
      <AuthContext.Provider value={{
        state: this.state,
        setEmail: (value) => this.setState({email: value, error: ''}),
        setPassword: (value) => this.setState({password: value, error: ''}),
        loginPress: this.loginPress,
        renderError: this.renderError

      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  };
}

export default AuthProvider ;
