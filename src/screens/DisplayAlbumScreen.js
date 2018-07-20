import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { HomeConsumer } from '../contexts/HomeProvider';
import { Background, Section, RainbowButton } from '../components/common';

class DisplayAlbumScreen extends Component {
  componentDidMount() {
    this.props.setFinished;
  }
  _renderItem = ({ item }) => (
      <RainbowButton
        label={item.uri}
      />
  )
  render() {
    return (
      <HomeConsumer>
      {(context) => (
      <Background>
        <Section>
          <FlatList
            data={context.state.selection}
            renderItem={this._renderItem}
          />
        </Section>
      </Background>
      )}
      </HomeConsumer>
    );
  }
}

export default DisplayAlbumScreen;
