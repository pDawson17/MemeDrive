import React, { Component } from 'react';
import { FlatList, Image, View, Dimensions, TouchableHighlight } from 'react-native';
import { HomeConsumer } from '../contexts/HomeProvider';
import { Background, Section, Input, IconButton } from '../components/common';
import Toolbar from '../components/Toolbar';

const { width } = Dimensions.get('window');

class DisplayAlbumScreen extends Component {
  _renderItem = ({ item }) => (
    <HomeConsumer>
    {(context) => (

      <View style={{ borderWidth: .5, borderColor: '#707070' }}>
        <Image
          style={{ width: width, height: width }}
          source={{ uri: item.uri }}

        />
        <View style={{ flexDirection: 'row' }}>
          <Input
            value={this.state.comment}
            onChangeText={(value) => this.setState({ comment: value })}
            placeholder="comment"
          />
          <IconButton
            iconName="plus-circle"
            onPress={context.setComment}
          />
        </View>
      </View>
    )}
    </HomeConsumer>
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
