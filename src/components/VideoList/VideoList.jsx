function VideoList({ videos, selectVideo }) {
  return (
    <ul>
      {videos.map(video => (
        <li
          style={{ cursor: 'pointer' }}
          key={video.id}
          onClick={() => {
            selectVideo(video.link);
          }}
        >
          {video.link}
        </li>
      ))}
    </ul>
  );
}

export { VideoList };
