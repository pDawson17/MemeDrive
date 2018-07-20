import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { HomeConsumer } from '../contexts/HomeProvider';
import {
  RainbowButton,
  Background,
  Section,
  AlbumDisplay,
  IconButton
 } from '../components/common';
 import Toolbar from '../components/Toolbar';


class HomeScreen extends Component {
  _renderItem = ({ item }) => (
    <AlbumDisplay
      title={item.name}
      date={item.date}
    />
  )
  render() {
    return (
      <HomeConsumer>
      {(context) => (
        <Background>
          <Section style={{ justifyContent: 'flex-start' }}>
            <Toolbar
              buttonOne="user"
              buttonTwo="crosshair"
              buttonThree="plus-circle"
              onPressOne={() => this.props.navigation.navigate('Profile')}
              onPressThree={() => this.props.navigation.navigate('CreateAlbum')}
            />
            <FlatList
              style={styles.listStyle}
              data={context.state.data}
              renderItem={this._renderItem}
              extraData={this.state}
            />
          </Section>
        </Background>
      )}
      </HomeConsumer>
    );
  }
}

const styles = {
  listStyle: {
    alignSelf: 'stretch'
  }
}

export default HomeScreen;
