import React, { ReactNode } from 'react';

import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import ITwit from './types';
import ILiterals from '../../../i18n';
import RenderMedia from './RenderMedia';
import TwitHeader from './TwitHeader';
import { LinkToProfile } from '../ProfileSwitcher';
import { normalizeText } from '../common/utils';

const CustomCard: any = styled(Card)`
  max-width: 600px;
  margin-bottom: 30px;
  padding: 20px;
`;

interface ITwitBody {
  children: ReactNode
}
const TwitBody = ({children}: ITwitBody) => {
  return (
    <div>
      {children}
    </div>
  )
}

const RenderTwitBodyText = ({twit}:{twit: ITwit}) => {
  const text = (twit.retweeted_status ? twit.text.substring(twit.text.indexOf(':') + 1) : twit.text).split(' ');
  const urls: {[x:string]: string} = twit.entities.urls
    .map(({url}) => url)
    .reduce((acum, curr) => ({...acum, [curr]:curr}), {});

  return (
    <>
      {text.map((word, i) => {
        if (urls[word]) {
          return <a key={i} href={word} target="_blank">{word} </a>
        } else if(word.startsWith('@')) {
          return <LinkToProfile color='#0000EE' key={i} profileName={normalizeText(word)} />
        } else {
          return word + ' ';
        }
      })}
    </>
  );
}

interface ITwitCard {
  twit: ITwit,
  literals: ILiterals
}

const TwitCard = ({twit, literals}: ITwitCard) => {
  const userData = twit.retweeted_status ? twit.retweeted_status.user : twit.user;

  return (
    <CustomCard>
      <TwitHeader
        literals={literals}
        retwit={!!twit.retweeted_status}
        rtInfo={twit.user.name}
        img={userData.profile_image_url_https}
        name={userData.name}
        username={userData.screen_name}
        verified={userData.verified}
      />
      <TwitBody>
        <p>
          {RenderTwitBodyText({twit})}
        </p>
        {twit.extended_entities && <RenderMedia media={twit.extended_entities.media} />}
        
        {twit.quoted_status && <TwitCard literals={literals} twit={twit.quoted_status} />}
      </TwitBody>
    </CustomCard>
  );
};

export default TwitCard;
