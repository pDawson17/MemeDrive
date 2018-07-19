import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, View } from '@expo/vector-icons';

const AlbumDisplay = ({title, date, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.touchStyle}>
      <Entypo name="air" size={40} color='#707070' />
      <Text style={styles.titleStyle}>
        {title}
      </Text>
      <Text style={styles.titleStyle}>
        {date}
      </Text>
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
    borderColor: '#707070',
    justifyContent: 'space-between'
  },
  titleStyle: {
    color: '#707070',
    fontSize: 23,
    paddingLeft: 60
  }
}
export { AlbumDisplay };
