import { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  state = {
    isLoading: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.videoLink !== prevProps.videoLink) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { videoLink } = this.props;
    const { isLoading } = this.state;
    const showLoader = videoLink && !isLoading;
    const sizePlayer = isLoading ? '100%' : 0;

    return (
      <>
        {showLoader && <h1>Завантажуємо відео...</h1>}
        {videoLink && (
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            >
              <ReactPlayer
                url={videoLink}
                width={sizePlayer}
                height={sizePlayer}
                controls
                onReady={() => this.setState({ isLoading: true })}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

export { Player };
