import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const Header = ({ label }) => {
  return(
    <ImageBackground
    style={styles.viewStyle}
    source={require('./img/gradient.jpg')}
    >
      <Text style={styles.textStyle}>
        {label}
      </Text>
    </ImageBackground>
  );
};

const styles = {
  viewStyle: {
    margin: 30,
    marginTop: 80,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fffff0',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'

  },
  textStyle: {
    color: '#fffff0',
    fontSize: 30
  }
}

export { Header };
