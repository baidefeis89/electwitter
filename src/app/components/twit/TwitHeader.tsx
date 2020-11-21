import React from 'react';

import styled from '@emotion/styled';
import ILiterals from '../../../i18n';
import { ProfileImgSmall } from '../common/profileImage';
import { Icon } from '@material-ui/core';
import VerifiedToken from './verified';
import { Subtitle } from '../common/textComponents';

const TwitTitle = styled('span')`
  font-size: 20px;
  font-weight: bold;
`;

const TwitTitleContainer = styled('div')`
  display: flex;
  margin-left: 5px;
  flex-direction: column;
`;

const TwitHeaderContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const RtInfo = styled('div')`
  color: #5b7086;
  font-weight: bold;
  margin-bottom: 10px;
  .material-icons {
    font-size: 1rem;
  }
`;

interface ITwitHeader {
  literals: ILiterals,
  img: string,
  name: string,
  username: string,
  retwit: boolean,
  verified: boolean,
  rtInfo?: string
}
const TwitHeader = ({literals, img, name, username, retwit, verified, rtInfo}: ITwitHeader) => {
  return (
    <>
      {retwit && <RtInfo><Icon>repeat</Icon> {rtInfo} {literals.RETWEETED_LBL}</RtInfo>}
      <TwitHeaderContainer>
        <ProfileImgSmall src={img} />
        <TwitTitleContainer>
        <TwitTitle>
          {name}{verified && <VerifiedToken />}
        </TwitTitle>
        <Subtitle>@{username}</Subtitle>
        </TwitTitleContainer>
      </TwitHeaderContainer>
    </>
  );
}

export default TwitHeader;