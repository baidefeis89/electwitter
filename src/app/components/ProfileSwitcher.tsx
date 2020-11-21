import React, { useState } from 'react';

import styled from '@emotion/styled';
import { TextField } from '@material-ui/core';
import { ipcRenderer } from './common/electron';
import ILiterals from '../../i18n';

const Input = styled(TextField)`
  width: 300px;
`;

const SwitcherContainer = styled('div')`
  text-align: center;
  margin-bottom: 10px;
`;

const onPressEnter = (value: string) => {
  ipcRenderer.send('getUserData', value);
  ipcRenderer.send('getTimeline', value);
}

interface IProfileSwitcher {
  literals: ILiterals
}
const ProfileSwitcher = ({literals}: IProfileSwitcher) => {
  const [profile, setProfile] = useState('');

  const onKeyPress = (e: any) => {
    if(e.charCode==13) {
      onPressEnter(profile);
    }
  }

  return (
    <SwitcherContainer>
      <Input label={literals.INSERT_USERNAME_LBL} onKeyPress={onKeyPress} onChange={e => setProfile(e.target.value)} />
    </SwitcherContainer>
  )
}

export default ProfileSwitcher;
