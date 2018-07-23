import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons';

const IconButton = ({ iconName, onPress }) => {
  return (
      <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <Feather name={iconName} size={32} color='#707070' />
      </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 50,
    width: 50
  }
};
export { IconButton };
