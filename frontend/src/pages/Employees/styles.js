import styled from 'styled-components';
import { shade } from 'polished';

import shape from '../../assets/shape.svg';

export const Header = styled.div`
  background: url(${shape}) no-repeat;
  background-size: cover;
  height: 156px;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #2b3939;
`;
