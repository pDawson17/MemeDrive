import React, { Component } from 'react';
import { Input, Header, Background, Section, RainbowButton } from '../components/common';
import Toolbar from '../components/Toolbar';
import { ImagePicker } from 'expo';
import { MultiImageSelector, MultiImage } from 'react-native-multi-image-selector';

class CreateAlbumScreen extends Component {
  state = {
    image: null,
    imageArray: []
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      multiple: true,
      aspect: [4, 3],
    });
    console.log(result);

    if(!result.cancelled) {
      this.setState({ image: result.uri })
    }
  }
  render() {
    return(
      <Background>
        <Toolbar
          buttonOne="arrow-left"
          onPressOne={() => this.props.navigation.navigate('Home')}
        />
        <RainbowButton
          label="Pick Image"
          onPress={this._pickImage}
        />
        <RainbowButton
          label="Pick Image 2"
          onPress={
            ()=> {
                  MultiImage.pickImage({
                         showCamera:true,
                         maxNum: 5,
                         multiple:true
                     }).then((imageArray)=> {
                         this.setState({imageArray})
                     }).catch(e=> {
                    });
             }
          }
        />
        <Input />
      </Background>
    );
  }
}

export default CreateAlbumScreen;
