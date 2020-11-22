import React from 'react';

import RenderMedia from './RenderMedia';
import { render } from '@testing-library/react';
import { IMedia } from './types';

describe('Render media', () => {
  const mediaData: IMedia = {
    type: 'video',
    video_info: {variants: [{url: 'http://videourl.com'}]},
    url: '',
    media_url: 'http://imgurl.com'
  };
  
  it('should render video', () => {
    const data = [ mediaData ];
    const { container } = render(
      <RenderMedia 
        media={data}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render some videos', () => {
    const data = [ mediaData, mediaData, mediaData ];
    const { container } = render(
      <RenderMedia 
        media={data}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render image', () => {
    const data = [ {...mediaData, type: 'photo'} ];
    const { container } = render(
      <RenderMedia 
        media={data}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

});
