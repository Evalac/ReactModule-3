import { Component } from 'react';

import videos from '../videos.json';
import content from '../text.json';

import { RestApi } from './RestApi/RestApi';
import { VideoList } from './VideoList/VideoList';
import { Player } from './Player/Player';
import { Reader } from './Reader/Reader';

class App extends Component {
  state = {
    selectedLink: null,
  };

  selectVideo = link => {
    this.setState({ selectedLink: link });
  };

  render() {
    return (
      <>
        {/* <RestApi /> */}
        {/* <VideoList videos={videos} selectVideo={this.selectVideo} />
        <Player videoLink={this.state.selectedLink} /> */}
        <Reader content={content} />
      </>
    );
  }
}

export { App };
