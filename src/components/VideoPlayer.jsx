import React from 'react';
import ReactPlayer from 'react-player';

export const VideoPlayer = ({ url }) => {
  return (
    <div className='roomslist_new roomslist_new_background'>
      <ReactPlayer
        playing={true}
        className='response-player'
        controls={true}
        muted={true}
        url={url}
      />
    </div>
  );
};
