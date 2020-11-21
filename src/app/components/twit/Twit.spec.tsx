import React from 'react';

import TwitHeader from './TwitHeader';
import { render } from '@testing-library/react';

describe('Twit Card', () => {
  const literals = {};
  it('should render', () => {
    const { container } = render(
      <TwitHeader
        literals={literals}
        img={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*'}
        name={'Real name'}
        username={'User name'}
        retwit={false}
        verified={false}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

});
