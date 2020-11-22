import React, { ReactNode, useState } from 'react';

import styled from '@emotion/styled';
import { Icon, InputAdornment, TextField } from '@material-ui/core';
import { ipcRenderer } from './common/electron';

const Input = styled(TextField)`
  width: 300px;
`;

const SwitcherContainer = styled('div')`
  text-align: center;
  margin: 20px 0;
`;

const Link = styled('span')`
  cursor: pointer;
  text-decoration: underline;
  color: ${({color}) => color};
`;

const loadProfile = (value: string) => {
  ipcRenderer.send('getUserData', value);
  ipcRenderer.send('getTimeline', value);
}

interface ILinkToProfile {
  profileName: string,
  color?: string
}
export const LinkToProfile = ({profileName, ...props}: ILinkToProfile) => {
  return (
    <Link {...props} onClick={() => loadProfile(profileName)}>{profileName} </Link>
  )
}

const ProfileSwitcher = ({}) => {
  const [profile, setProfile] = useState('');

  const onKeyPress = (e: any) => {
    if(e.charCode==13) {
      loadProfile(profile);
    }
  }

  return (
    <SwitcherContainer>
      <Input
        onKeyPress={onKeyPress}
        onChange={e => setProfile(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon>search</Icon>
            </InputAdornment>
          ),
        }}
      />
    </SwitcherContainer>
  )
}

export default ProfileSwitcher;
