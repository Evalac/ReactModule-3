import { Component } from 'react';

import videos from '../videos.json';

import { RestApi } from './RestApi/RestApi';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';

class App extends Component {
  state = {
    selectedLink: null,
  };

  selectVideo = link => {
    this.setState({ selectedLink: link });
    console.log(link);
  };

  render() {
    return (
      <>
        {/* <RestApi /> */}
        <VideoList videos={videos} selectVideo={this.selectVideo} />
        <Player videoLink={this.state.selectedLink} />
      </>
    );
  }
}

export { App };
