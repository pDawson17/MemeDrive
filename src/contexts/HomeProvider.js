import React, { createContext, Component } from 'react';


export const HomeContext = createContext();
export const HomeConsumer = HomeContext.Consumer;
//includes display& creation
class HomeProvider extends Component {
 state = {
   galleryOpen: false,
   galleryPermission: false,
   selection: [],
   finishedSelection: false,
   data: [
      {
        key: '123',
        name: 'album 1',
        date: '7/15/2018'
      },
      {
        key: '456',
        name: 'album 2',
        date: '7/4/2018'
      },
      {
        key: '789',
        name: 'album 3',
        date: '6/2/2018'
      },
    ]
    }
  render() {
    return (
    <HomeContext.Provider
    value={{
        state: this.state,
        openGallery: (() => this.setState({ galleryOpen: true })),
        setFinished: (() => this.setState({ finishedSelection: false })),
        getGalleryPermission: (() => this.setState({ galleryPermission: true })),
        setSelection: ((selectedPhotos) => {
          this.setState({
            selection: [...this.state.selection, ...selectedPhotos],
             finishedSelection: true
            });
      }),
      }}
    >
      {this.props.children}
    </HomeContext.Provider>
  );
}
}

export default HomeProvider;
