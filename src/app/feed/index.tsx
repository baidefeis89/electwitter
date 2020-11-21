import React, { useState } from 'react';

import styled from '@emotion/styled';
import TwitCard from '../components/twit/TwitCard';
import ITwit, { IUser } from '../components/twit/types';
import { ipcRenderer } from '../components/common/electron';
import Loading from '../components/loading';
import { IpcRendererEvent } from 'electron';
import ILiterals from '../../i18n';
import { Subtitle } from '../components/common/textComponents';
import { ProfileImg } from '../components/common/profileImage';
import UserNotFound from '../components/common/userNotFound';

export const Title = styled('h2')`
  margin: 0;
  font-weight: bold;
`;

const Img = styled('img')`
  max-width: 100%;
  height: 184px;
`;

const ImageVoid = styled('div')`
  width: 100%;
  height: 184px;
  background-color: rgb(196, 207, 214);
`;

interface IFeed {
  literals: ILiterals
}
const Feed = ({literals}: IFeed) => {
  const [ timeline, setTimeline ] = useState<ITwit[]>();
  const [ userData, setUserData ] = useState<IUser>();

  ipcRenderer.on('userDataUpdated', (event: IpcRendererEvent, args: IUser) => {
    setUserData(args);
  });
  ipcRenderer.on('timelineUpdated', (event: IpcRendererEvent, args: ITwit[]) => {
    setTimeline(args);
  });

  // @ts-ignore
  if ((timeline && (timeline.errors || timeline.error)) || (userData && userData.errors)) {
    return <UserNotFound literals={literals} />
  }

  return (
    timeline && userData
    ? (<>
      <Title>{userData.name}</Title>
      <Subtitle>{`${new Intl.NumberFormat('de-DE').format(userData.statuses_count)} ${literals.TWEETS_LBL}`}</Subtitle>

      <ImageVoid>
        { userData.profile_banner_url && <Img src={userData.profile_banner_url} alt={literals.COVER_IMG_LBL} />}
      </ImageVoid>
      
      <ProfileImg src={userData.profile_image_url_https} alt={literals.PROFILE_IMG_LBL} />
      {
        timeline.length
        ? timeline.map( (twit, i) => <TwitCard literals={literals} twit={twit} key={i} />)
        : <Subtitle>No data</Subtitle>
      }
    </>)
    : <Loading />
  );
}

export default Feed;
