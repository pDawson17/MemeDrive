import React, { Component } from 'react';
import { Permissions } from 'expo';
import {
  Background,
  RainbowButton,
  Input
} from '../components/common';
import Toolbar from '../components/Toolbar';
import ImageSelector from '../expoMultiImageSelector/ImageSelector';
import { HomeConsumer } from '../contexts/HomeProvider';


class CreateAlbumScreen extends Component {
  state = {
    image: null,
    imageArray: []
  }
  openCameraRoll(context) {
    if (context.state.galleryOpen) {
      return <ImageSelector />;
    }
  }
  async _requestPermissionAsync(context) {
    const { status } = await Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
  }
  switchPage(context) {
    if (context.state.finishedSelection) {
      return (
      this.props.navigation.navigate('DisplayAlbum')
    );
    }
  }
  render() {
    return (
      <HomeConsumer>
      {(context) => (
      <Background>
      {this.switchPage(context)}
      {this.openCameraRoll(context)}
        <Toolbar
          buttonOne="arrow-left"
          onPressOne={() => this.props.navigation.navigate('Home')}
        />
        <RainbowButton
          label="Pick Image"
          onPress={context.openGallery}
        />
        <Input
          placeholder="Title"
          onChangeText={context.setAlbumTitle}
          value={context.state.albumTitle}
        />

      </Background>
    )}
    </HomeConsumer>
    );
  }
}

export default CreateAlbumScreen;
