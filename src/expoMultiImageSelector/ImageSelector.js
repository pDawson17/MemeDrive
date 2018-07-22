import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import ImageBrowser from './ImageBrowser';

class ImageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageBrowserOpen: true,
      photos: []
    };
  }
  imageBrowserCallback = (callback) => {
    callback.then((photos) => {
      this.setState({
        imageBrowserOpen: false,
        photos
      });
    }).catch((e) => console.log(e));
  }

  renderImage(item, i) {
    return (
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: item.file }}
        key={i}
      />
    );
  }
  render() {
    if (this.state.imageBrowserOpen) {
      return (<ImageBrowser max={100} callback={this.imageBrowserCallback} />);
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.photos.map((item, i) => this.renderImage(item, i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageSelector;
