import React from 'react';

import { IMedia } from './types';

interface IRenderByMediaType {
  mediaData: IMedia
}
const RenderByMediaType = ({mediaData}: IRenderByMediaType) => {
  switch(mediaData.type) {
    case 'video':
      return ( 
        <video
          src={mediaData.video_info.variants[0].url}
          controls
          width="95%"
          style={{borderRadius: '20px'}}
        />
      );
    case 'photo':
      return (
        <img
          src={mediaData.url}
          width="500"
        />
      );
    default:
      return null;
  }
}

interface IRenderMedia {
  media: IMedia[]
}
const RenderMedia = ({media}: IRenderMedia) => {
  return (
    <>
      {media && media.length
        ? media.map( (x, i) => (
          <RenderByMediaType mediaData={x} key={i} />
        ))
        : null
      }
  </>
  )
}

export default RenderMedia;
