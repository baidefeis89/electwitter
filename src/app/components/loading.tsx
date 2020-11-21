import { CircularProgress } from '@material-ui/core';
import styled from '@emotion/styled';

const Loading = styled(CircularProgress)`
  width: 60px;
  height: 60px;
  position: relative;
  top: 50vh;
  left: 50%;
`;

export default Loading;
