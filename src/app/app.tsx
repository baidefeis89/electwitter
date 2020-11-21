import React from 'react';
import ILiterals from '../i18n';

import { ipcRenderer } from './components/common/electron';
import ProfileSwitcher from './components/ProfileSwitcher';
import Feed from './feed';

const getData = () => {
  ipcRenderer.send('getTimeline', 'estrumblesr');
  ipcRenderer.send('getUserData', 'estrumblesr');
}

interface IApp {
  literals: ILiterals
}
const App = ({literals}: IApp) => {
  getData();
  
  return (
    <>
      <ProfileSwitcher literals={literals} />
      <Feed literals={literals} />
    </>
  )
}

export default App;
