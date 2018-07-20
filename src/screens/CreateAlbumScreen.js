import React, { Component } from 'react';
import {
  Input,
  Header,
  Background,
  Section,
  RainbowButton
} from '../components/common';
import Toolbar from '../components/Toolbar';
import { Permissions } from 'expo';
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
  async _requestPermissionAsync (context) {
    const { status } = await Permissions.askAsync(Expo.Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      { context.getGalleryPermission };
    }
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
        <RainbowButton
          label="Pick Image 2"
        />

      </Background>
    )}
    </HomeConsumer>
    );
  }
}

export default CreateAlbumScreen;
