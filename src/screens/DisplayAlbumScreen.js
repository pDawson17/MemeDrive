import React, { Component } from 'react';
import { FlatList, Image, View, Dimensions, TouchableHighlight } from 'react-native';
import { HomeConsumer } from '../contexts/HomeProvider';
import { Background, Section } from '../components/common';
import Toolbar from '../components/Toolbar';

const { width } = Dimensions.get('window')

class DisplayAlbumScreen extends Component {
  _renderItem = ({ item }) => (
    <View style={{ borderWidth: .5, borderColor: '#707070' }}>
    <Image
      style={{ width: width, height: width }}
      source={{ uri: item.uri }}

    />
    </View>
  )
  render() {
    return (
      <HomeConsumer>
      {(context) => (
      <Background>
        <Toolbar
          buttonOne="arrow-left"
          onPressOne={() => this.props.navigation.navigate('Home')}
        />
        <Section>
          <FlatList
            keyExtractor={(item) => item.uri}
            data={context.state.selection}
            renderItem={this._renderItem}
            extraData={this.state}
            numColumns={1}
          />
        </Section>
      </Background>
      )}
      </HomeConsumer>
    );
  }
}

export default DisplayAlbumScreen;
