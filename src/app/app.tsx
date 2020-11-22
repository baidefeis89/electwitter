import React from 'react';
import ILiterals from '../i18n';

import { ipcRenderer } from './components/common/electron';
import ProfileSwitcher from './components/ProfileSwitcher';
import Feed from './feed';

const getData = () => {
  ipcRenderer.send('getTimeline', 'angelmartin_nc');
  ipcRenderer.send('getUserData', 'angelmartin_nc');
}

interface IApp {
  literals: ILiterals
}
const App = ({literals}: IApp) => {
  getData();
  
  return (
    <>
      <ProfileSwitcher />
      <Feed literals={literals} />
    </>
  )
}

export default App;
