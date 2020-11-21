import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/ErrorBoundary';
import styled from '@emotion/styled';
import { Container as MaterialContainer } from '@material-ui/core';
import Loading from './components/loading';
import App from './app';

const Container = styled(MaterialContainer)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const getLiterals = (setLiterals: any) => {
  const lang = navigator.language;

  import(`../i18n/${lang}.json`)
    .then(res => setLiterals(res))
    .catch(() => import('../i18n/en.json'))
    .then(res => setLiterals(res));
}

const Main = () => {
  const [ literals, setLiterals ] = useState();

  useEffect(() => getLiterals(setLiterals), [])
  return (
    <Container maxWidth="sm">
      <ErrorBoundary literals={literals}>
        { literals
          ? <App literals={literals} />
          : <Loading />
        }
      </ErrorBoundary>
    </Container>
  );
};

ReactDOM.render(<Main />, document.querySelector('#root'));
