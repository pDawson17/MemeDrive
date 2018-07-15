import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, View } from '@expo/vector-icons';

const AlbumDisplay = ({title, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.touchStyle}>
      <Entypo name="air" size={40} color='#707070' />
    </TouchableOpacity>
  );
}

const styles = {
  touchStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#DFC97A',
    height: 80,
    borderWidth: 2,
    borderColor: '#707070'
  }
}
export { AlbumDisplay };
